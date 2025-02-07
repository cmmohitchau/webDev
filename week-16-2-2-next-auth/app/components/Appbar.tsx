"use client"
import NextAuth from "next-auth"
import { signIn , signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export function Appbar() {
    const session = useSession()
   return(
    <div className="bg-slate-200 p-10 text-black">
    <button onClick={ () => signIn()} className="mx-3">Sign in </button>
    <button onClick={ () => signOut()}>Logout</button>
    {JSON.stringify(session)}

</div>

   )
}