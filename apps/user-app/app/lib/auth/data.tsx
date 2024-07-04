"use server"

import { getServerSession } from "next-auth"
import { authoptions } from "./route"
import { redirect } from "next/navigation"
import db from '@repo/db/client'

export const Data=async()=>{
    const session = await getServerSession(authoptions)
    const id=session.user.id
    console.log(id +"id is not define ")
    if(!id){
        redirect('./api/auth/signin')
    }
    const data=await db.onRampTransacton.findMany({
        where:{
            userid:Number(id)
        },
    })
    return data
} 