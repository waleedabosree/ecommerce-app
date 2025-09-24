"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { getCachPayment, getOnlinePayment } from "../actions/Payment.action";
import { useCart } from "../context/CartContext";

interface Inputs {
  details: string;
  city: string;
  phone: string; // ✅ keep as string
}

export default function CheckoutPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();
  const { cartDetails } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(
    null
  );

  const cartId = cartDetails?.cartId;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(values: Inputs) {
    if (!cartId) {
      setErrorMsg("No cart found");
      return;
    }

    try {
      if (paymentMethod === "cash") {
        const response = await getCachPayment(cartId, { shippingAddress: values });
        if (response?.data.status === "success") {
          toast.success("Cash order placed successfully");
          router.push("/");
        }
      } else if (paymentMethod === "online") {
        const response = await getOnlinePayment(cartId, { shippingAddress: values });
        if (response?.data.status === "success") {
          toast.success("Redirecting to checkout");
          window.location.href = response?.data.session.url; // ✅ online flow
        }
      } else {
        setErrorMsg("Please select a payment method");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Payment failed, try again.");
    }
  }

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl tracking-tight font-bold my-5">Payment</h2>
      {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Your details"
          className="p-5 my-5"
          {...register("details", { required: "Details is required" })}
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}

        <Input
          type="text"
          placeholder="Your city"
          className="p-5 my-5"
          {...register("city", { required: "City is required" })}
        />
        {errors.city && (
          <p className="text-red-500">{errors.city.message}</p>
        )}

        <RadioGroup
          onValueChange={(val) => setPaymentMethod(val as "online" | "cash")}
          className="my-5"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash">Cash Payment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online">Online Payment</Label>
          </div>
        </RadioGroup>

        <Input
          type="tel"
          placeholder="Your phone"
          className="p-5 my-5"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && (
          <p className="text-red-500">{errors.phone.message}</p>
        )}

        <Button type="submit" className="px-7 py-7">
          Checkout
        </Button>
      </form>
    </div>
  );
}

