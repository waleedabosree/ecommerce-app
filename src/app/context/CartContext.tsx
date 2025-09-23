"use client"
import { Children, createContext, useEffect, useState } from "react";
import { CartData } from "../types/cart.model";


interface CartContextType{
    cartDetails:CartData |null;
    getCartDetails?:()=>Promise<void>;
    setcartDetails:(cart:CartData|null)=>void;
}

const cartcontext = createContext(<CartContextType>{
     cartDetails:null;
     getCartDetails:async()=>{},
        setcartDetails:()=>{}
    });



export default function CartContextProvider({Children}:{Children:React.ReactNode}){
    const [cartDetails, setcartDetails] = useState(null)
    async function getCartDetails() {
        const response = await getUserCart()
        console.log(response.data,"carttt")
         setCartDetails(response.data)
    }
    useEffect(()=>{
        getCartDetails()

    },[])
     

    return(

        <cartcontext.Provider value={{cartDetails,setcartDetails,getCartDetails}}>
       {Children}
    </cartcontext.Provider>
    ) 
    
}

export function useCart(){

    const myContext = useContext(cartcontext);
    return myContext
}