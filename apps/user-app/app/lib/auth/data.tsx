"use server"

import db from '@repo/db/client'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authoptions } from "../../components/authoptions"

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