import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import {createBlogInput,updateBlogInput} from "@varung01/medium-common"

const app = new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables:{
        userId:  string
    }
}>()

// middleware
app.use('/*', async (c,next)=>{

    // const prisma = new PrismaClient({
    //     datasourceUrl: c.env?.DATABASE_URL,
    // }).$extends(withAccelerate());

    const jwt = c.req.header('Authorization');
    if (!jwt) {
		c.status(401);
		return c.json({ error: "Unauthorized" });
	}

    const token = jwt?.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload) {
        c.status(401);
        return c.json({ error: "Invalid token" });
    }

	c.set('userId', payload.id as string);
    
        // const existingUser = prisma.user.findUnique({
        //     where:{
        //         id: 
        //     }
        // })

    await next();



})

// POST /api/v1/blog
app.post('/', async (c)=>{   
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        });
    }

    const userId = c.get('userId') ;

    try{
        const post = await prisma.post.create({
            data:{
                title: body?.title,
                content: body?.content,
                authorId: userId,
            }
        })

        return c.json({
            id:post.id
        })
    }
    catch(e){
        c.status(401);
        return c.json({Error:"Failed to create the post"})
    }

});

// PUT /api/v1/blog
app.put('/', async (c)=>{    

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
     const {success} = updateBlogInput.safeParse(body);

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        });
    }
    
    const userId = c.get('userId') ;

    try{
        const updatedBlog = await prisma.post.update({
            data:{
                title: body?.title,
                content: body?.content
            },
            where:{
                id : body?.id
            }
        })

        return c.json(updatedBlog)
    }catch(e){
        c.status(401);
        return c.json({Error:"Failed to update the post"})
    }

});

// GET /api/v1/blog/:id
app.get('/:id', async (c)=>{

    const blogId = c.req.param('id')

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());


    try{

        const blog = await prisma.post.findFirst({
            where:{
                id:blogId
            }
        })

        return c.json(blog)

    }catch(e){
        c.status(401);
        return c.json({Error:`Failed to get the post with id:${blogId}`})
    }
});


// GET /api/v1/blog/bulk
app.get('/blogs/all', async (c)=>{

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try{
        const blogs = await prisma.post.findMany();
        return c.json(blogs);
    }
    catch(e){
         c.status(401);
        return c.json({Error:`Failed to get blogs`})
    }
	

}) 







export default app


