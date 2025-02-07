// app/api/auth
import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import { NEXT_AUTH } from "@/app/lib/auth"
const handler = NextAuth(NEXT_AUTH)
console.log("IN HANDLER" , process.env.GITHUB_ID);
console.log("IN SECRET" , process.env.GITHUB_SECRET);
export const GET = handler
export const POST = handler