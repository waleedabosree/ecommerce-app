"use server"

import { Product } from '@/app/types/product.model'; 
import { getUserToken } from "@/lib/token.utils";
import axios from "axios";

async function getUserCart() {
    try {
        const token = await getUserToken();

        const response = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: {
                token: token as string,
            }
        });

        return {
            data: response?.data.data,
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

async function addProductToCart(productId: string) {
    try {
        const token = await getUserToken();

        const response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", { productId }, {
            headers: {
                token: token as string,
            }
        });

        console.log(response.data, "add to cart");
        return {
            data: response?.data.data,
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

async function removeProduct(productId: string) {
    try {
        const token = await getUserToken();

        const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            headers: {
                token: token as string,
            }
        });

        console.log(response.data, "remove from cart");
        return {
            data: response?.data.data,
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

async function updateProduct(productId: string, count: number) {
    try {
        const token = await getUserToken();

        const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count }, {
            headers: {
                token: token as string,
            }
        });

        console.log(response.data, "update product");
        return {
            data: response?.data.data,
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

export { getUserCart, addProductToCart, removeProduct, updateProduct };
