"use server"
import db from '@repo/db/client'
import { getServerSession } from 'next-auth'
import { authoptions } from '../lib/auth/route'
import { redirect } from 'next/navigation'
import { error } from 'console'
export default async function Balance(amount:number,to:string){
    console.log(amount,to+"name of the ");
    const session = await getServerSession(authoptions)
    const id=session.user.id
    console.log(Number(id))
    if(!session.user){
        redirect('./api/auth/signin')
    }

    const found=await db.user.findFirst({
        where:{
            number:to
        }
        
    })
    if(!found){
        return false;
    }
    try{
    await db.$transaction([
        db.balance.updateMany({
            where: {
                userId:Number(id)
            },
            data: {
                amount: {
                    decrement:amount*100
                },
                locked:1
            }
        }),
        
        db.user.update({
            where:{
                number:to
            },
            data:{
                Balance:{
                    updateMany:{
                    where:{},
                        data:{
                            amount:{
                                increment:amount*100
                            }
                        }
                    }
                }
            }
        })
        
    ]);
    return true;
}catch(err){
    return false;
}

    }
    
    
