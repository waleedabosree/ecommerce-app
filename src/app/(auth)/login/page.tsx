"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  interface Inputs {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(values: Inputs) {
    setErrorMsg(null); 
    const response = await signIn("credentials", {
      redirect: false, 
      email: values.email,
      password: values.password,
    });

    if (response?.ok) router.push("/");
    else if (response?.error) setErrorMsg(response.error);
  }

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl tracking-tight font-bold my-5">Login</h2>
      {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          className="p-5 my-5"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <Input
          type="password"
          placeholder="Password"
          className="p-5 my-5"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <Button type="submit" className="px-7 py-7">
          Login
        </Button>
      </form>
    </div>
  );
}
