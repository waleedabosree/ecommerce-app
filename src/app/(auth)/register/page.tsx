'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"; 

export default function RegisterPage() {
  const [errorMsg, setErrorMsg]= useState<string | null>(null);
  const router= useRouter();
  interface Inputs {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phoneNumber: string;
  }
  const {register, handleSubmit, formState: { errors }}= useForm<Inputs>();
  async function onSubmit(values: Inputs){
   try {
    debugger;
      const response=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
      if(response.data.message==="success"){
        console.log("User registered successfully");
        router.push("/login");
      }
      setErrorMsg(null);
   } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log("Axios error:", error.response?.data?.message || error.message);
        const errorMessage= error.response?.data?.errors?.msg ? error.response?.data?.errors?.msg  : error.response?.data?.message;
        setErrorMsg(errorMessage || "An error occurred");
      }
   }

 }


  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl tracking-tight font-bold my-5">Register</h2>
      {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Your Name" className="p-5 my-5" 
          {...register("name", { required: "Name is required" })} />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          <Input type="email" placeholder="Email" className="p-5 my-5"  
           {...register("email", { required: "Email is required" })} />
           {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          <Input type="password" placeholder="Password" className="p-5 my-5"  
           {...register("password", { required: "Password is required" })} />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          <Input type="password" placeholder="Confirm Password" className="p-5 my-5" 
            {...register("rePassword", { required: "Confirm Password is required" })} />
            {errors.rePassword && <span className="text-red-500">{errors.rePassword.message}</span>}
          <Input type="tel" placeholder="Phone Number" className="p-5 my-5" 
            {...register("phoneNumber", { required: "Phone Number is required" })} />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}

          <Button type="submit" className="px-7 py-7">Register</Button>

      </form>
    </div>
  );
}

