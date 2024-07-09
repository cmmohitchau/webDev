import {RecoilRoot , useRecoilValueLoadable} from 'recoil';
import { todosFamily } from './todosLoadable';
import Skeleton from '@mui/material/Skeleton';

function App() {
  return(
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todoContent = useRecoilValueLoadable(todosFamily(id))

  switch (todoContent.state) {
    case 'hasValue' :
      return <div>
        {todoContent.contents.title}
        {todoContent.contents.description}
        {todoContent.contents.completed}
      </div>;
    
    case 'loading' :
      return <div><Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} /></div>;

      case 'hasError' :
        return <div><h1>has failed</h1></div>
  }
}
export default App