const {Client} = require("pg")

const client = new Client({
  connectionString: "postgresql://neondb_owner:VaM0ilTGw9Ls@ep-icy-sea-a5s4nuav-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function createTable() {
    try {
        await client.connect();
        const res = await client.query(`
        CREATE TABLE address(
            id SERIAL PRIMARY KEY,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(50) NOT NULL,
            state VARCHAR(50) NOT NULL,
            user_id INT,
            FOREIGN KEY (user_id) references users(id)
        );
    `)
    console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
    
}

async function insertData() {
    try {
        const query = 'INSERT INTO address (city,country,state,user_id) VALUES ($1,$2,$3)';
        const values = ["Ambala","Haryana","India","1"];
        const res = await client.query(query,values);
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

insertData();