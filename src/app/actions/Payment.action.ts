"use server";

import { getUserToken } from "@/lib/token.utils";
import axios from "axios";

interface ShippingAddressTypes {
  details: string;
  phone: string;
  city: string;
}

async function getCachPayment(
  cartId: string,
  body: { shippingAddress: ShippingAddressTypes }
) {
  try {
    const token = await getUserToken();
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      body,
      {
        headers: {
          token: token as string,
        },
      }
    );
    return {
      data: response?.data,
      status: response.status,
      message: response?.data.message,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status,
        message: error.response?.data?.message || "An error occurred",
      };
    }
  }
}

async function getOnlinePayment(
  cartId: string,
  body: { shippingAddress: ShippingAddressTypes }
) {
  try {
    const token = await getUserToken();
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      body,
      {
        headers: {
          token: token as string,
        },
      }
    );
    return {
      data: response?.data,
      status: response.status,
      message: response?.data.message,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status,
        message: error.response?.data?.message || "An error occurred",
      };
    }
  }
}

export { getCachPayment, getOnlinePayment };

