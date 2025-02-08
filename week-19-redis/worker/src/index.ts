import { createClient } from "redis";

const client = createClient();

async function startServer() {
    await client.connect();

    while(1) {
        try {
            const response = await client.brPop("submissions" , 0);
            console.log(response);
        } catch(e) {
            console.log(e); 
        }

        
    }
}

startServer();