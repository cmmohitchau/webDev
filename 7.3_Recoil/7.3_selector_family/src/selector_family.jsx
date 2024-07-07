import {atomFamily , selectorFamily } from 'recoil'
import axios from 'axios';

export const todosFamily = atomFamily({
    key : "todosFamily",
    default : selectorFamily({
        key : "todosSelectorFamily",
        get : id => async () => {
           const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo
        }
    })
})

