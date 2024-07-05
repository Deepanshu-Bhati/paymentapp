import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authoptions } from "./components/authoptions";

export default async function Page() {
  console.log("dione")
  const session = await getServerSession(authoptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/home')
  }
  
  // return <>
  // <div>
  //   {JSON.stringify(session.user)}
  //   </div></>
}
