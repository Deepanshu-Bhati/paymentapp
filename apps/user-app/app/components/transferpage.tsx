"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useEffect, useState } from "react";
import { History } from "@repo/ui/history";
import { Status } from "@repo/ui/status";
import Balance from "./mainbalance";
import { ToastContainer, toast } from 'react-toastify';
import { balance } from "../lib/auth/functions";
import 'react-toastify/dist/ReactToastify.css';

export function Transferpage(){
    const [amount,setamount]=useState(0);
    const [phonenumber,setphonenumber]=useState("")
    const [rupee,setrupee]=useState(0);
    const [count,setcount]=useState(0);
    useEffect(()=>{
        balance().then((res)=>{
            console.log(res)
            setrupee(Number(res)/100)
        })
    },[count])
   ;
    return(
        <div className="flex">
            <div>

            <Card title="Send money">
            <TextInput label="Amount" placeholder="Amount" onChange={(value)=>{
                setamount(Number(value))
            }}></TextInput>
                <TextInput label="Phone Number" placeholder="Phone Number" onChange={(value)=>{
                    setphonenumber(value)
                }}></TextInput>
                <Button onClick={async()=>{

                   const data=await Balance(amount,phonenumber)
                   if(!data){
                    // alert("User is not available on paytm")
                    toast.error("Invalid Number",{
                        position:"top-center"
                    })
                    setcount(count+1)
                   }else{
                    toast.success("Payment Done", {
                        position: "top-center"
                      });
                   }
                }}> Transfer</Button>
                <ToastContainer autoClose={1000}/>                    
            </Card>
                </div>
            <div className="ml-48">
            <div className="w-[500px]">
                <History balance={rupee}> 
                    name
                </History>
                <h1 className="relative font-extrabold mt-9 text-2xl">Transactions</h1>
                

                
                
                </div> 
                {/* {item.map((e)=>{
        
        return <Status Status={e.status} balance={e.amount/100} date={e.startTime.toLocaleDateString()}></Status>
                })} */}
                
        </div>
            
        </div>
    )
}