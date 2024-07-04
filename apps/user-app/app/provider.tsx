"use client"
import { SessionProvider } from "next-auth/react";
//@ts-ignore
export default function Provider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return<>
        <SessionProvider>
            {children}
        </SessionProvider>
    </>
}