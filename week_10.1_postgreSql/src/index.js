const { Client } = require("pg");

const client = new Client({
  connectionString : "postgresql://neondb_owner:VaM0ilTGw9Ls@ep-icy-sea-a5s4nuav-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

async function createUsersTable() {
  try {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE students (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
}

createUsersTable();
async function insertData() {
  try {
    await client.connect();
    const insertQuery = "INSERT INTO students (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res);
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end();
  }
}
insertData();

async function fetchData(email) {
  try {
    await client.connect();
    const query = 'SELECT * FROM students WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]);
      return result.rows[0];
    } else {
      console.log('No user found with the given email.');
      return null;
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err;
  } finally {
    await client.end();
  }
}

fetchData('example@123.com')


async function updateUsername(username , email) {
  try {
    await client.connect();
    const query = 'update students SET username = $1 where email = $2';
    const values = [username , email];
  
    const res = await client.query(query , values);
    console.log(res);
  } catch (err) {
    console.log("Error while updating" , err);
  } finally {
    await client.end()
  }
}
updateUsername('mohit' ,'example@123.com')

async function deleteData(email) {
  try {
    await client.connect();
    const query = 'DELETE FROM students WHERE email = $1';
    const values = [email];

    const res = await client.query(query , values);
    console.log(res);
    console.log("Deleted successfully");
  } catch(err) {
    console.log("Error while deleting " , err);
  } finally {
    await client.end();
  }
}
deleteData('mohit123@@')