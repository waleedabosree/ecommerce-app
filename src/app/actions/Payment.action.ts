"use server"
import { getUserToken } from "@/lib/token.utils";
import axios from "axios";
interface ShippingAddressTypes{
    details:string;
    phone:string;
    city:string;
   
}

async function getCachPayment(cartId:string,shippingAddress:{ShippingAddress:ShippingAddressTypes}) {
    try{
         const token = await getUserToken();
        const response =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/65cd72e38462ab02c71ee050/${cartId}`,{shippingAddress},
            {
            headers:{
                token:token as string,
            }
          });
        debugger
         return{
            data:response?.data,
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


async function getOnlinePayment(cartId:string,shippingAddress:{ShippingAddress:ShippingAddressTypes}) {
    try{
         const token = await getUserToken();
        const response =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{shippingAddress},
            {
            headers:{
                token:token as string,
            }
          });
        debugger
         return{
            data:response?.data,
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
export{
        getCachPayment,
        getOnlinePayment
    };