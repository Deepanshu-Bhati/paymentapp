"use server"

import db from '@repo/db/client'
import { getServerSession } from 'next-auth'
import { authoptions } from '../../components/authoptions'

export  const balance=async()=>{
    const session=await getServerSession(authoptions)
    const id=session.user.id
    const data=await db.balance.findFirst({
        where:{
            userId:Number(id)
        }
    })
    return data?.amount
}   