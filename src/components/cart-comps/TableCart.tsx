"use client";
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
export function TableCart() {
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
          <TableRow>
            <TableCell className="font-medium text-center p-3">
              <div className="flex text-center items-center gap-4">
                <div className="relative">
                  <Badge className="absolute top-[-10px] left-[-10px] cursor-pointer">
                    x
                  </Badge>
                  <Image
                    src="https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg"
                    alt="Product Image"
                    width="60"
                    height="60"
                  />
                </div>
                <span>Product Title</span>
              </div>
            </TableCell>
            <TableCell className="text-center p-3">10 EGP</TableCell>
            <TableCell>
              <div className="flex text-center items-center justify-center gap-2 p-3">
                <button className="border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer ">
                  +
                </button>
                <p>1</p>
                <button className="border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer ">
                  -
                </button>
              </div>
            </TableCell>
            <TableCell className="text-center p-3">$250.00</TableCell>
          </TableRow>
          <TableRow className="bg-slate-200">
            <TableCell className="text-center p-6">Total</TableCell>
            <TableCell className="text-center p-6" colSpan={2}>1000</TableCell>
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
