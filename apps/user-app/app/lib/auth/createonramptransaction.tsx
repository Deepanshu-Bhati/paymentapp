"use server"

import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authoptions } from "../../components/authoptions"

export async function createOnRampTransaction(amount:number,provider:string){
    const session = await getServerSession(authoptions)
    const id=session.user.id
    console.log(id)
    const token = Math.random().toString();
    if(!id){
        return {
            message:"User is not logged in"
        }
    }
    await prisma.onRampTransacton.create({
        data:{
            userid:Number(id),
            amount:amount,
            status:"processing",
            token:token,
            provider,
            startTime:new Date(),
        }
    })
}