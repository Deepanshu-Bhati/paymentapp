"use client"
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function(){
    const session=useSession()
    return <>
        
    </>
}