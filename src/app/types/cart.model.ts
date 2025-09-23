import { Product } from '@/app/types/product.model';
import { Brand } from './productDetails.model';
// export interface CartData{
//     _id:string,
//     name:string,
//     slug:string,
//     image:string
// }
export interface category{
     _id:string,
    name:string,
    slug:string,
    image:string
}
export interface subcategory{
     _id:string,
    name:string,
    slug:string,
    category:string
}
export interface sCartProduct{
     _id:string,
     count:number,
     price:number
     product:{
        _id:string,
        id:string,
        title:string,
        imageCover:string,
        quantity:number,
        ratingAverage:number,
        brand:Brand,
        category:category,
        subcategory:subcategory[]
     }
}
export interface CartData{
    status:string;
    cartId:string;
    data:{
        _id:string;
        cartOwner:string;
        totleCartPrice:number;
        products:sCartProduct[];
    }
    crearedAt:string;
    updatedAt:string;
    _v:number
     numOfCartItems:number;
     totalCartPrice:number;
}