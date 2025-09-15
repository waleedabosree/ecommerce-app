import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
export function Navbar() {
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
    <NavigationMenuItem> <Link href="/cat">Categories</Link> </NavigationMenuItem>
  </NavigationMenuList>

   <NavigationMenuList className="font-bold gap-5">
    <NavigationMenuItem> <button> <ShoppingCart></ShoppingCart> </button> </NavigationMenuItem>
    <NavigationMenuItem> <button> <Heart></Heart> </button> </NavigationMenuItem>
  </NavigationMenuList>

</NavigationMenu>
</div>
  );
}