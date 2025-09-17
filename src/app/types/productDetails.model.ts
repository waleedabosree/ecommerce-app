export interface ProductDetails{
    _id:string,
    title:string,
    description:string,
    quantity:number,
    price:number,
    imageCover:string,
    images:string[],
    category:category,
    brand:Brand,
    ratingsAverage:number,
    ratingsQuantity:number,
    sold:number,
    createdAt:string,
    updatedAt:string,
    id:string,
    subcategory:subcategory[],
    _v:number,
    reviews:review[]
    


}
export interface subcategory{
    _id:string,
    name:string,
    slug:string,
    Category:string
}
export interface category{
    _id:string,
    name:string,
    slug:string,
    image:string
}
export interface Brand{
    _id:string,
    name:string,
    slug:string,
    image:string
}
export interface review{
    // user:string,
}