
import {createClient , RedisClientType} from 'redis';


export class stockManager {
    private static instance  :stockManager;
    private client : RedisClientType;
    private subscriptions : Map<string,string[]>

    private constructor() {
        this.client = createClient();
        this.client.connect();
        this.subscriptions = new Map();
    }

    public static getInstance() {
        if(!stockManager.instance) {
            stockManager.instance = new stockManager();
        }
        return stockManager.instance;
    }

    public addUser(userId : string, stockTicker : string ) {
        if(!this.subscriptions.has(stockTicker)) {
            this.subscriptions.set(stockTicker , []);
        }

        this.subscriptions.get(stockTicker)?.push(userId);

        if(this.subscriptions.get(stockTicker)?.length === 1) {
            this.client.subscribe(stockTicker , (message) => {
                this.handleMessage(stockTicker,message);
            })
            
        }
        console.log(`${userId} has subsribed to : ${stockTicker}`);

    }

    public removeUser(userId : string , stockTicker : string) {
        this.subscriptions.set(stockTicker , this.subscriptions.get(stockTicker)?.filter(sub => sub !== userId) || []);

        if(this.subscriptions.get(stockTicker)?.length === 0) {
            this.client.unsubscribe(stockTicker);
            console.log(`There is no subscriber in this stock : ${stockTicker}`);
            
        }

        console.log(`${userId} is unsubscribed from this stock : ${stockTicker}`);
        
    }

    private handleMessage(stockTicker : string , message : string) {
        console.log(`message on the channel ${stockTicker} : ${message}`);
        
    }
}

