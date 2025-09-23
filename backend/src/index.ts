import { Hono } from 'hono'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import userRoutes from "./Routes/user"
import blogRoutes from "./Routes/blog"

const app = new Hono().basePath('/api/v1');

app.route('/user', userRoutes) // Handle /user
app.route('/blog', blogRoutes) // Handle /book


// const prisma = new PrismaClient({
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate())

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

export default app
