import {Client} from 'pg';

const client = new Client({
    connectionString : "postgresql://neondb_owner:VaM0ilTGw9Ls@ep-icy-sea-a5s4nuav-pooler.us-east-2.aws.neon.tech/prisma_migrate_shadow_db_45d23c05-e6a0-4e86-b1c1-0acef190b055?sslmode=require"
})

async function createUser() {
    try {
        await client.connect();
        const query = `
            CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(50) NOT NULL,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL
            )
        `
        const result =await client.query(query);
        console.log(result);
        
    } catch(err) {
        console.log(err);
    }
}

// createUser();

type user  = {
    firstName : string,
    username : string,
    password : string
}

async function insertUser(data : user) {
    const {firstName , username , password} = data;

    try {
        await client.connect();
        const query = `
        INSERT INTO users (firstName , username , password) VALUES ($1 , $2 , $3);
        `
        const VALUES = [firstName , username , password];
        const result = client.query(query , VALUES);
        console.log(result);
        
    } catch(err) {
        console.log("Errror while inserting data" , err);
    }
}


async function createAddress() {
    try {
        await client.connect();
        const query = `
            CREATE TABLE address(
             id SERIAL PRIMARY KEY,
             user_id INT NOT NULL,
             city VARCHAR(50) NOT NULL,
             state VARCHAR(50) NOT NULL,
             country VARCHAR(50) NOT NULL,
             FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `
        const result = await client.query(query);
        console.log(result);
    } catch(err) {
        console.log("Error while creating address table" , err);
        
    }
}

// createAddress()
type address = {
    city : string,
    state : string,
    country : string ,
    user_id : number
}

async function insertAddress(add : address) {
    const {city , state , country , user_id} = add;
    try {
        await client.connect();
        const query = `
        INSERT INTO address(city , state , country , user_id) VALUES ($1 , $2 , $3 , $4)
        `
        const VALUES = [city , state , country , user_id];
        const result = await client.query(query , VALUES);
        console.log(result);
        
    } catch(err) {
        console.log("Error while inserting address" , err);
        
    }
}



async function findData() {
    try {
        await client.connect();
        const query = `
        SELECT address.city 
        FROM users 
        JOIN address ON users.id = address.user_id 
        WHERE users.id = 1
        `;
        const res = await client.query(query);
        console.log(res);
        
    }
    catch(err) {
        console.log(err);
    }
}

findData()