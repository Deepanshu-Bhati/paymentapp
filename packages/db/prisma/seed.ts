import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
const prisma =new PrismaClient();


 const main= async ()=>{
    const alice =await prisma.user.upsert({
        where:{
            number:"1111111111",
        },
        update:{},
        create:{
            number:"1111111111",
            name:"alice",
            email:"alice@gmail.com",
            password:await bcrypt.hash("alice",10),
            Balance:{
                create:{
                    amount:6000000,
                    locked:0
                }
            },
            OnRampTransaction:{
                create:{
                    status:"processing",
                    startTime:new Date(),
                    token:"token_1",
                    amount:5000,
                    provider:"hdfc"
                }
            }
        }
        
        })
    const bob=await prisma.user.upsert({
        where:{
            number:"2222222222"
        },
        update:{},
        create:{
            number:"2222222222",
            email:"bob@gmail.com",
            password:await bcrypt.hash("bob",10),
            name:"bob",
            Balance:{
                create:{
                    amount:9000000,
                    locked:1
                }
            },
            OnRampTransaction:{
                create:{
                    status:"processing",
                    token:"token_2",
                    amount:5000,
                    provider:"axis",
                    startTime:new Date()
                }
            }
        }
    })
    console.log(alice,bob)
    }

    main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
