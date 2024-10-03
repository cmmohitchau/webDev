interface Users {
    username : string,
    name : string,
    age : number,
    password  : string
}

type updateName = Pick<Users , 'name' | 'age' | 'password' >
type updateOptional = Partial<Users>

function getUsername(user : updateOptional) {
    console.log(user.name);
    
}

getUsername({
    password : "23455643",
    name : "mohit"
})

// Readonly
type Emp = {
     id : number,
    name : string,
    
}

function updateEmpId(user : Readonly <Emp>) {

    console.log(user.id);
    
}

updateEmpId({
    id : 434093,
    name : "rohit"
})

// records and maps
type course = {
        id : number ;
        courseName : string;
    
}

type Teachers = Record<string , course>

function getCourseName(teacher1 : Teachers) {
    
    console.log(Object.keys(teacher1)[0]);
    
}

getCourseName({
    "hari@gmail.com" : {
        id : 1212,
        courseName : "physics"
    }
})