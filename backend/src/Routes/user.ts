import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'

// const app = new Hono()
// added generic to Hono's instance
const app = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

app.post('/signup', async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try{
        const user = await prisma.user.create({
            data:{
                email: body?.email,
                password: body?.password
            }

        })

        const jwtPayload = {
            id: user?.id
        };
        const secret = c.env.JWT_SECRET;

        const jwtToken = await sign(jwtPayload,secret);

        // console.log("Token",token)

        return c.json({jwtToken});

    }catch(e:any){
        c.status(403);
        return c.json({error: `Error while Signing Up!,${e}`})
    }

});

app.post('/signin', async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try{
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
    
        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }
    
        const jwtPayload = {
            id: user?.id
        };
        const secret = c.env.JWT_SECRET;
    
        const jwtToken = await sign(jwtPayload,secret);
    
        return c.json({jwtToken});
    }catch(e:any){
        return c.json({error:"User not found"})
    }

});

app.get('/', (c)=>{

}) 



export default app


