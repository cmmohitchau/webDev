import { PrismaClient } from "@prisma/client";
import { log } from "console";
const primsa = new PrismaClient();

async function createUser(username : string, lsname : string , fsname : string , email : string , password : string) {
    const res = await primsa.employee.create({
        data : {
            email,
            username,
            fsname,
            lsname,
            password
        }
        
        
    })
    console.log(res);
}
// createUser("cmmohitchau","chaudhary","mohit","cmmohitchau@gmail.com","3e43874");
interface Todo {
    title :string,
    description : string,
    Done : boolean

}

async function createTodo(userid : number , todo : Todo) {
    const {title , description , Done} = todo;
    const res = await primsa.todo.create({
        data : {
            user_id : userid,
            title,
            description,
            Done
        }
    })
    console.log(res);
}

async function findName(email : string) {
    const res = await primsa.employee.findFirst({
        where : {
            email
        },
        select : {
            username : true
        }
    })
    console.log(res);
    
}

async function updateusername(newUsername : string , email : string) {
    const res = await primsa.employee.update({
        where : {
            email
        } ,
        data : {
            username : newUsername
        }
    })
    console.log(res);
    
}
interface Employee {
    username : string,
    email : string,
    password : string,
    fsname : string
}
async function createEmployee(emp : Employee) {
    const {username , email , password , fsname} = emp;
    const res = await primsa.employee.create({
        data : {
            username,
            email,
            password,
            fsname
        }
    })
    console.log(res)
}

// createEmployee( {
//     email : "cmmohitchau@gmail.com",
//     username : "cmmohitchau",
//     password : "39494",
//     fsname : "mohit"
// });

async function deleteRow(email : string) {
    try {
        const res = await primsa.employee.delete({
            where  : {
                email
            }
        })
        return res;
    } catch(err) {
        return err
    }
}
// findName("cmmohitchau@gmail.com")
// updateusername("mohitprasad" , "cmmohitchau@gmail.com")

// createTodo(2, {
//     title : "go to home",
//     description : "go to gym nov",
//     Done : true
// })
