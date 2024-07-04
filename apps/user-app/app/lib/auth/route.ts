import db from '@repo/db/client' 
import bcrypt from 'bcrypt'
import  CredentialsProvider  from 'next-auth/providers/credentials';

 

export const  authoptions ={
    providers:[
        CredentialsProvider({
            name:'credential',
            credentials:{
                Name:{label:"Name", placeholder:"enter your name",text:"text"},
                Number:{label:"Phone Number",placeholder:"11111111",type:"text"},
                Password:{label:'Password',placeholder:"", type:"password"}
            },

            //@ts-ignore
            async authorize(credentials:any){

                const hashedpassword=await bcrypt.hash(credentials.Password,10);
                const existuser=await db.user.findFirst({
                    where:{
                        number:credentials.Number
                    }
                })
                // console.log(existuser)
                if(existuser){
                    const password=await bcrypt.compare(credentials.Password,existuser.password)
                    if(password){
                        return {
                            id:existuser.id.toString(),
                            email:existuser.email,
                            Number:existuser.number,
                            data:"name of the "

                        }
                    }
                    else{
                        return null
                    }
                }
                try{
                    const user=await db.user.create({
                        data:{
                            number:credentials.Number,
                            password:hashedpassword,
                            name:credentials.Name
                        }
                    })
                    return{
                        id:user.id,
                        Number:user.number,
                        password:user.password
                    }
                }catch(e){
                        console.log(e+ "some error in the ")
                    
                    }
                    return null 
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        }
    }
}

// export default options