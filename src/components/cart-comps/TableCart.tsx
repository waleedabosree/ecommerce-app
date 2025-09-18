"use client";
import { removeProduct, updateProduct } from "@/app/actions/cart.action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
export function TableCart() {
  const{cartDetails , getCartDetails} =useCart();

  async function removeProductFromCart(ProductId:string) {
    const response = await removeProduct(ProductId)
    console.log(Response)
    toast.success("Product succesfully Deleted From Cart")
    await getCartDetails()
  }

    async function updateCartProducts(ProductId:string,count:number) {
    const response = await updateProduct(ProductId,count)
    console.log(Response)
    toast.success("Product Updated")
    await getCartDetails()
  }


  return (
    <div className="w-3/4 mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-6 text-center">Product</TableHead>
            <TableHead className="p-6 text-center">Price</TableHead>
            <TableHead className="p-6 text-center"> Quantity</TableHead>
            <TableHead className="p-6 text-center">SubTotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartDetails?.data.products.map((product)=><TableRow key={product._id}>
            <TableCell className="font-medium text-center p-3">
              <div className="flex text-center items-center gap-4">
                <div className="relative">
                  <Badge onClick={()=>removeProductFromCart(product.product._id)} className="absolute top-[-10px] left-[-10px] cursor-pointer">
                    x
                  </Badge>
                  <Image
                    src={product.product.imageCover}
                    alt="Product Image"
                    width="60"
                    height="60"
                  />
                </div>
                <p>{product.product.title.splite(" ").slice(0,2).join(" ")}</p>
              </div>
            </TableCell>
            <TableCell className="text-center p-3">{product.price}EGP</TableCell>
            <TableCell>
              <div className="flex text-center items-center justify-center gap-2 p-3">
                <button onClick={()=>updateCartProducts(product.product._id,product.count+1)} className="border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer ">
                  +
                </button>
                <p>{product.count}</p>
                <button onClick={()=>updateCartProducts(product.product._id,product.count-1)} className="border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer ">
                  -
                </button>
              </div>
            </TableCell>
            <TableCell className="text-center p-3">{product.price*product.count}</TableCell>
          </TableRow>)}
          
          <TableRow className="bg-slate-200">
            <TableCell className="text-center p-6">Total Price</TableCell>
            <TableCell className="text-center p-6" colSpan={2}>{cartDetails?.data?.totalCartPrice}EGP</TableCell>
            <TableCell className="text-center p-6">
                <button className="px-10 py-5 bg-black text-white rouneded-md">
                    Checkout
                </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
