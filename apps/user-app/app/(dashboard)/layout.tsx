import { Appbarrender } from "../components/appbarrender"
import { Sidebar } from "../components/sidebar";
import { RecoilRoot } from "recoil";
export default function({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return(<>
      

    <div className="flex">
      <div className="w-1/5 max-h-screen-2xl">

     <Sidebar/>
      </div >
     <div className="w-full h-[100vh]">{children}</div>
    </div>
      

    </>)
}