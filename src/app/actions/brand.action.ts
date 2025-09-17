"use server"
import axios from "axios";
import { Brand } from "../types/productDetails.model";

async function getBrands() {
    try{
        const response =await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
        debugger
         return{
            data:response?.data.data,
            status:response.status,
            message:response?.data.message,
         }
    }catch(error:unknown)
    {
        if(axios.isAxiosError(error)){
            return{
                data:[],
                status:error.response?.status,
                message:error.response?.data.message ||"An error occured",
            }
        }
    }
}

async function getBrandDetail(id:string):Promise<Brand | null>  {    
    try{
        const response =await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
        return response.data.data; 
    }catch (error) {
    console.error(error);
    return null; 
  }
    
}

export{getBrands, getBrandDetail}