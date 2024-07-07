import {useRecoilValue , RecoilRoot} from 'recoil';
import { todosFamily } from './selector_family';

function App() {
  return(
    <RecoilRoot>
      <Todo id="1" />
      <Todo id="2" />
      <Todo id="3" />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todo = useRecoilValue(todosFamily(id))
  return(
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3> 
    </div>

  )
}
export default App