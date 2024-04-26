const zod = require("zod")

function validateInput(arr)
{
    const schema = zod.object({
        email : zod.string().email({msg : "email is invalid"}),
        password : zod.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/)
    });
    const response = schema.safeParse(arr)
    console.log(response);
}


validateInput({
    email : "mohit@gmail.com",
    password : "Mohit123"
})

