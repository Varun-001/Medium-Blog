import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import {signupInput, signinInput} from "@varung01/medium-common"

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
    const {success} = signupInput.safeParse(body);

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        });
    }

    try{
        const user = await prisma.user.create({
            data:{
                email: body?.email,
                password: body?.password,
                name: body?.name
            }

        })

        const jwtPayload = {
            id: user?.id
        };
        const secret = c.env.JWT_SECRET;

        const jwtToken = await sign(jwtPayload,secret);

        // console.log("Token",jwtToken)

        return c.json({jwtToken});

    }catch(e:any){
        console.log("Error:-",e)
        c.status(403);
        return c.json({error: `Error while Signing Up!,${e}`})
    }

});

app.post('/signin', async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        });
    }

    try{
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
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
        console.log("error:-",e)
        return c.json({error:"User not found"})
    }

});

// app.get('/', (c)=>{

// }) 



export default app


