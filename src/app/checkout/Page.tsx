    'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useRouter } from "next/navigation";
import { cache, useState } from "react";
import { useForm } from "react-hook-form"; 
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { error } from "console";
import { getCachPayment, getOnlinePayment } from "../actions/Payment.action";



export default function ChechoutPage() {
  const [errorMsg, setErrorMsg]= useState<string | null>(null);
  const router= useRouter();
  const { cartDetails,setCartDetails} =useCart();
  const [paymentMethod, setpaymentMethod] = useState<"cash"|"online"| null>(null)
  const cartId=cartDetails?.cartId;
  interface Inputs {
    details: string;
    city: string;
    phone:number;
  }

  const {register, handleSubmit, formState: { errors }}= useForm<Inputs>();
  async function onSubmit(values: Inputs){
    if(paymentMethod==="cash")
        {   try {
      const response=await getCachPayment(cartId as string,{ShippingAddress:values});
        if(response?.data.status ==="success")
     {
            // setCartDetails(null)
            // router.push("/")
            window.location.href=response?.data.session.url;
        }}
        catch(error)
        {
            console.log(error)
        }
    }
 } else if(paymentMethod==="online"){
     {   try {
      const response=await getOnlinePayment(cartId as string,{ShippingAddress:values});
        if(response?.data.status==="success")
     {
            setCartDetails(null)
            router.push("/")
        }}
        catch(error)
        {
            console.log(error)
        }
    }

 }


  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl tracking-tight font-bold my-5">Payment</h2>
      {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Your details" className="p-5 my-5" 
          {...register("details", { required: "details is required" })} />
          {errors.details && <p className="text-red-500">{errors.details.message}</p>}
          <Input type="text" placeholder="Your city" className="p-5 my-5" 
          {...register("city", { required: "city is required" })} />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          <RadioGroup onValueChange={(val)=>setpaymentMethod(val as"online"|"cash")} className="my-5" defaultValue="cash" aria-label="Payment Method">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="cash" id="cash" />
    <Label htmlFor="cash">Cash Payment</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="online" id="online" />
    <Label htmlFor="online">Online Payment</Label>
  </div>
</RadioGroup>
          
          <Input type="tel" placeholder="Your phone" className="p-5 my-5" 
            {...register("phone", { required: "Phone Number is required" })} />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

          <Button type="submit" className="px-7 py-7">Checkout</Button>

      </form>
    </div>
  );
}

