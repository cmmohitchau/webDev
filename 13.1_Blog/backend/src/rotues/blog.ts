import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : string ,
        params : number
    }
}>();

blogRouter.use('/*' ,async (c , next) => {
    const header = c.req.header("authorization") || "";
  
    const token =  header.split(" ")[1];
  
    const response = await verify(token , c.env.JWT_SECRET);
   
    if(response) {
        c.set("userId" , response.id as string)
        await next()
    } else {
        c.status(403)
        return c.json({
            message : "You are not logged in"
        })
    }
  })
  
  
  
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog =await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : authorId ,
        }
    })


    return c.json({
        id : blog.id
    })
  })
  
  
  
blogRouter.put('/',async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog =await prisma.post.update({
       where : {
        id : body.id
       },
       data : {
        title : body.title,
        content : body.content
       }
    })

    return c.json({
        id : blog.id
    })
})
  
  
// Todo : add pagination
blogRouter.get("/bulk" , async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl  : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
       select : {
        title : true , 
        content : true,
        id : true,
        author : {
            select : {
                name : true
            }
        }
       }

    })

    return c.json({
        blogs
    })
})
  
  
  
blogRouter.get('/:id',async (c) => {
    const blogId =  c.req.param('id');

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog =await prisma.post.findFirst({
            where : {
             id : blogId,
            },
            select : {
                content : true,
                title : true,
                author : {
                    select : {
                        name : true
                    }
                }

            }
         })

         return c.json({
            blog
        })
    } catch(err) {
        c.status(411)
        return c.json({
            message : "Error while fetching blog"
        })
    }
})
