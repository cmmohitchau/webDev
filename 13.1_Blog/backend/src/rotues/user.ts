import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'


export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();
userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL,  // Pass the DATABASE_URL from the env parameter
        },
      },
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: body.password
        },
        select: {
          id: true
        }
      });
     
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  
      return c.json({ jwt });
    } catch (e) {
      console.log("error in catch", e);
  
      c.status(403);
      return c.json({ error: "error while signing up" });
    }
  });
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasources : {
        db : {
          url : c.env.DATABASE_URL
        },
      },
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    try {
      const user = await prisma.user.findFirst({
        where : {
          email : body.email,
          password : body.password
        },
      })
      if(!user) {
        c.status(403)
        return c.json({
          message : "Incorrect creds"
        })
      }
  
      const token =await sign( {id : user.id} , c.env.JWT_SECRET)
      c.status(200)
      return c.json({
        token
      })
  
    } catch(err) {
      c.status(403);
      return c.json("Error");
    }
  })
  
