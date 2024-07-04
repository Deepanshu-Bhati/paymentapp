import Link from "next/link";

export  function Sidebar(){
    console.log("render")
    return (
        <>
        <div className="">

        <div className="flex     w-full  h-[100vh] border shadow-lg  flex-col text-2xl ">
            <div className=" mt-3 ">
                <div className="font-serif font-medium p-3"><Link className="flex justify-start" href={"./dashboard"}><span className="mt-1 ml-1">{home}</span> &nbsp; Dashboard</Link></div>
                <div className="font-medium font-serif p-3"><Link className="flex justify-start" href={'./transactions'}><span className="mt-1 ml-1">{transactions}</span>&nbsp;Transactions</Link></div>
                <div className="font-medium font-serif p-3"><Link className="flex justify-start" href={"./transfer"}><span className="mt-1 ml-1">{tranfer}</span> &nbsp; Transfer</Link></div>
                <div></div>
            
            </div>
        </div>
        </div>
        </>
    )
}



const home= <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
const transactions=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
const tranfer=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>


