import z from "zod"

export const signupBody = z.object({
    username : z.string().email(),
    name : z.string().optional(),
    password  : z.string().min(6)
})
export const signinBody = z.object({
    username : z.string().email(),
    password : z.string().min(6)
})
export const blogBody = z.object({
    title : z.string(),
    content : z.string()
})

export const blogPutBody = z.object({
    title : z.string().optional(),
    content : z.string().optional(),
    id : z.string()
})

export type BlogBody = z.infer<typeof blogBody>
export type BlogPutBody = z.infer<typeof blogPutBody>
export type SignupBody = z.infer<typeof signupBody>
export type SigninBody = z.infer<typeof signinBody>