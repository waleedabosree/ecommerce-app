'use client'
import { SessionProvider } from "next-auth/react";
import CartContextProvider from "./CartContext";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'


export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>
        <CartContextProvider>
          <Provider store={store}>
            {children}
          </Provider>
          
        </CartContextProvider>
        <Toaster
        position="top-right"
        reverseOrder={false} 
        />
        
         
    </SessionProvider>;
}