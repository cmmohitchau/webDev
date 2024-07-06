import {RecoilRoot, useRecoilState , useRecoilValue , useSetRecoilState } from "recoil";
import {notifications , totalNotificationSelector} from './atoms'

function App() {
  return(
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const notificationsCount = useRecoilValue(notifications)
  const totalNotification = useRecoilValue(totalNotificationSelector)
  return (
    <>
    <button>My Network {notificationsCount.network}</button>
    <button>jobs {notificationsCount.jobs}</button>
    <button>messaging {notificationsCount.messaging}</button>
    <button>notifications {notificationsCount.notifications}</button>
    <button>me {totalNotification}</button>
    </>
  )
}

export default App