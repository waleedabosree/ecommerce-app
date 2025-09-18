import { cookies } from "next/headers";
import { decode } from "punycode";

export async function getUserToken(){
     const encodedToken =   (await cookies()).get("next-auth-session-token")?.value;
     const decrepToken =await    decode({token: encodedToken ,secret:process.env.AUTH_SECRET!})
     const token = decrepToken?.token

    return token
}