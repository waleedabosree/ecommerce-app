"use server"
import axios from "axios";


async function getCatagories() {
    try{
        debugger;
        const response =await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
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
export{getCatagories, getSubCatagories}

async function getSubCatagories(id:string) {
    try{
        const response =await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
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