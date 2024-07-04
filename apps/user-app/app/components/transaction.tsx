"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { redirect } from "next/navigation";
import {useEffect, useState} from 'react'
import {History} from "@repo/ui/history"
import {balance} from "../lib/auth/functions";
import {Status} from '@repo/ui/status'

import { createOnRampTransaction } from "../lib/auth/createonramptransaction";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Data } from "../lib/auth/data";




const SUPPORTED_BANKS=[{
    name:"HDFC Bank",
    redirectUrl:"https://netbanking.hdfcbank.com"
},
{
    name:"Axis Bank",
    redirectUrl:"https://www.axisbank.com/"
}
]

export  function  Addmoney(){
    const [amount,setamount]=useState(0)
    const [provider,setprovider]=useState(SUPPORTED_BANKS[0]?.name||"")
    const [redirectUrl,setRedirectUrl]=useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [item,setitem]=useState<any[]>([])
    const [count,setcount]=useState(0)
    
    // useEffect(()=>{
    //    const data= Data().then((res)=>{
           
    //         console.log(res+"result is found")
    //     })
    //     console.log(data)
    // },[])
    const [rupee,setrupee]=useState(0);
    
    useEffect(()=>{
        balance().then((res)=>{
            console.log(res)
            setrupee(Number(res)/100)
        })
    },[count])
    useEffect(() => {
        try{

            const data=Data().then(res => {
                console.log(res);
                setitem(res)
                console.log(item)
            })

            
        }catch(err){
            console.log(err+"in fetching data")
        }
    }, [count]);
    
    // useEffect(()=>{
    //     const data=getdata();
    //     console.log(data+"data")
    
    // })

    // const data= Data()
    // console.log(data)
    // item.map((e)=>{
    //     console.log(e)
    // })
    
    

    return <>
    

    <div className="max-w-screen-2xl flex justify-center text-red-900">

    <div className="flex w-full">
        <Card title={"Add Money"}>
            <div className="w-full">
                <TextInput  label="Amount" placeholder="Amount" onChange={(value)=>{
                    const rupee =Number(value)*100;
                    
                    // console.log(rupee)
                    setamount(rupee)
                }}/>
                <div className="py-4 text-left">
                    Bank
                </div>
                <Select onSelect={(value)=>{
                    setRedirectUrl(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectUrl || "")
                    setprovider(SUPPORTED_BANKS.find(x=> x.name===value)?.name ||"")
                }} options={SUPPORTED_BANKS.map(x=>({
                    key:x.name,
                    value:x.name
                }))}/>
                <div>
                    <Button onClick={async()=>{
                        createOnRampTransaction(amount,provider).then(()=>{
                            setcount(()=>{
                                return count+1
                            })
                        window.location.href = redirectUrl || "";
                        })
                        
                }}> Add money</Button>
                </div>
            </div>
        </Card>
        <div className="ml-48">
            <div className="w-[500px]">
                <History balance={rupee}>
                    name 
                </History>
                <h1 className="relative font-extrabold mt-9 text-2xl">Transactions</h1>
                

                
                
                </div> 
                {item.map((e)=>{
        
                    return <Status Status={e.status} balance={e.amount/100} date={e.startTime.toLocaleDateString()}></Status>
                })}
                
        </div>
    </div>
                    </div>
                
    </>
}