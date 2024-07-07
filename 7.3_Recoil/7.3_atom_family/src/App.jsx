import {useRecoilValue , useRecoilState , useSetRecoilState, RecoilRoot} from 'recoil';
import { todosFamily } from './atomfamily';

function App() {
  return(<>
  <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={1} />
    <Todo id={2} />

  </RecoilRoot>

  </>)
}

function Todo({id}) {
  const todo = useRecoilValue(todosFamily(id));
  return(
    <div>
       <h1>{todo.title}</h1> 
       <h5>{todo.description}</h5>
       <p>{`the id of the todo is ${id}`}</p>
    </div>
  )
}
export default App