import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import Email from 'next-auth/providers/email';

export const options :NextAuthOptions={
    providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: 'POST',
        body: JSON.stringify({email: credentials?.email, password: credentials?.password}),
        headers: { "Content-Type": "application/json" }
      });
      const user = await res.json()
      if (res.ok && user) {
        return user
      }
      return null
    },
    }),
  ],
    session: {
        strategy: "jwt",
      },
    pages: {
        signIn: '/login',
      },
       callbacks: {
         async session({ session, user, token }) {
         return {...session, ...token, ...user}
        },
        async jwt({ token, user }) {
          return {  ...token, ...user}
        }
      },
      secret: process.env.NEXTAUTH_SECRET!,
    }

const handler=NextAuth(options)
 export { handler as GET, handler as POST };
