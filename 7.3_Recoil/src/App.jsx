import { RecoilRoot, useRecoilState, useRecoilValue , useSetRecoilState } from 'recoil';
import {networkAtom , JobsAtom , messagingAtom , NotificationAtom , NotificationSelector} from './Atoms.js'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const JobsCount = useRecoilValue(JobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  // const NotificationCount = useRecoilValue(NotificationAtom);
  const totalNotification = useRecoilValue(NotificationSelector);

  const [NotificationCount , setNotificationCount] = useRecoilState(NotificationAtom);


  return(
    <>
    <button>Home</button>
    <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
    <button>Jobs (JobsCount)</button>
    <button>Messaging ({messagingCount})</button>
    <button>Notifications ({NotificationCount})</button>
    <button>Me ({totalNotification})</button>
    
    <button onClick={ () => {
      setNotificationCount( c => c + 1)
    }}>notificationAdder</button>
    </>
  )
}

export default App