import {atomFamily , selectorFamily} from "recoil";
import axios from "axios";

export const todosFamily = atomFamily({
    key : "todosFamily",
    default : selectorFamily({
        key : "selectorFamily",
        get : (id) => async () => {
            await new Promise(r => setTimeout(r,5000))
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                return res.data.todo
        }
    })
})