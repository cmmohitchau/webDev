import axios from "axios";

async function main() {
    const r = await axios.post("https://httpdump.app/dumps/6e568aa8-2d41-45b6-9778-206edfe8eba6" , 
        {
        username : "mohit",
        password : "122345"
    }, {
        headers : {
            Authorization : "Bearer 123",
        },
    },
);

    console.log(r.data);
}

main()
