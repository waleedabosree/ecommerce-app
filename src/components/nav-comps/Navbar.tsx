'use client'
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/app/context/CartContext";
export function Navbar() {
  const session = useSession();
  const{cartDetails} =useCart();
  console.log(cartDetails,"navbar")

  console.log("Session data in Navbar:", session);
  return (
    <div>
   <NavigationMenu className="text-md max-w-7xl p-5 flex justify-between items-center">
   <NavigationMenuList className="text-3xl font-semibold tracing-tighter">
    <NavigationMenuItem > Ecommerce </NavigationMenuItem>
  </NavigationMenuList>

 <NavigationMenuList className="font-bold gap-5">
    <NavigationMenuItem> <Link href="/">Home</Link> </NavigationMenuItem>
    <NavigationMenuItem> <Link href="/products">Products</Link> </NavigationMenuItem>
    <NavigationMenuItem> <Link href="/cart">Cart</Link> </NavigationMenuItem>
    <NavigationMenuItem> <Link href="/brands">Brands</Link> </NavigationMenuItem>
    <NavigationMenuItem> <Link href="/cat">Categories</Link> </NavigationMenuItem>
  </NavigationMenuList>

   <NavigationMenuList className="font-bold gap-2">
    <NavigationMenuItem> 
      <button className="relative">
        {cartDetails?.numOfCartItems && cartDetails}
       x
       <ShoppingCart/>
      </button> 
       </NavigationMenuItem>
       
    <NavigationMenuItem> 
       <button className="relative">
       <Badge variant="default" >0</Badge>
       <Heart/>
      </button> 
    </NavigationMenuItem>
    {session?.data ? 
    <NavigationMenuItem> <Link href="/logout" onClick={() => signOut({callbackUrl:"/login"})}>Logout</Link> </NavigationMenuItem>
    : 
    <>
    <NavigationMenuItem> <Link href="/login">Login</Link> </NavigationMenuItem>
    <NavigationMenuItem> <Link href="/register">Register</Link> </NavigationMenuItem>
    </>

    }
  </NavigationMenuList>

</NavigationMenu>
</div>
  );
}