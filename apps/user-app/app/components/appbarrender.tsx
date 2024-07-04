"use client"
import { signIn,signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";
import { Session } from "inspector";
export function Appbarrender(){
    const router=useRouter()
    const session =useSession()
    return<>
    <div className="border">
        <Appbar signin={signIn} signout={ async()=>{
            await signOut()
            router.push("/api/auth/signin")
        }} user={session.data?.user}>
        </Appbar>
        {/* <div>
            {JSON.stringify(session.data)}
        </div> */}
    </div>
    </>
}