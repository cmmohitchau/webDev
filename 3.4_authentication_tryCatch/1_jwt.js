const jwt = require("jsonwebtoken")

// decode , sign , verify

const value = {
    name : "mohit",
    accountNumber : 122333444
}
const generateToken = jwt.sign(value,"secret")
const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oaXQiLCJhY2NvdW50TnVtYmVyIjoxMjIzMzM0NDQsImlhdCI6MTcxMzE5Nzg3MX0.TOq4PeKqyWHkJYkI7AqqdMVJsMIEyi4lngxUBHtGObg", "secret");

console.log(token);