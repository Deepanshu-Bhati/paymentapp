import { getServerSession } from 'next-auth'
import Image from 'next/image'
import image from '../../../public/background2.avif'
import { authoptions } from '../../components/authoptions'
export default async function(){
    const session = await getServerSession(authoptions)
    const id=JSON.stringify(session.user.id)
    return(
        <>
        <div className='max-h-screen-2xl '>
        <div className='max-w-screen-lg  max-h-screen-2xl'>
            <div className='mt-24 ml-12 h-[500] rounded-2xl  bg-slate-200 max-w-screen-2xl'>
                <div className='relative  top-20 text-6xl font-serif font-bold left-36'>

        <h1 className=''>Fast Safe,</h1>
        <h1 className=''>Social </h1>
        <h1 className=''>Payments </h1>
                </div>
        </div>
            </div>
            <div>
                <Image className='absolute rounded-3xl right-16 bottom-3' 
                src={image}
                alt='image'
                height={700}
                width={700}
                ></Image>
            </div>
        </div>
        </>
    )
}