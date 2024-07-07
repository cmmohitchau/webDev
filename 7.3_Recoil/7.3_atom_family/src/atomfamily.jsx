import { atomFamily , selectorFamily } from "recoil";
import Todos from "./Todos";


export const todosFamily = atomFamily({
    key : "todosFamily",
    default : (id) => {
        return Todos.find(x => x.id == id)
    }
});