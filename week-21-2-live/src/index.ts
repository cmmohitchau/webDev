import { stockManager } from "./stockManager"

let userId = ['1','2','3','4','5','6','7','8','9','10'];
let i = 0;
let j = 0;
const timer = setInterval( () => {

    stockManager.getInstance().addUser(userId[i++] , "APPLE")
} , 1000)

const t = setInterval(() => {
    stockManager.getInstance().removeUser(userId[j++] , "APPLE")
}, 2000);

setTimeout( () => {
    clearInterval(timer);
} , 10 * 1000)

setTimeout( () => {
    clearInterval(t);
} , 12 * 1000)