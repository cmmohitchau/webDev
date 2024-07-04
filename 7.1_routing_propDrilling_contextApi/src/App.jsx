import React ,{ Suspense } from 'react';
import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom'

const Dashboard = React.lazy( () => import("./components/Dashboard.jsx"));
import Landing from './components/Landing.jsx';


function App() {
  return(
    <>

    <BrowserRouter>
    <Appbar />
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback = {<div>...Loading </div>}><Dashboard/> </Suspense>} />
      <Route path="/" element={<Landing />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return(
    <>
    <button onClick={ () => {
        navigate("/")
      }}>Landing</button>
      <button onClick={ () => {
        navigate("/dashboard")
      }}>Dashboard</button></>
  )
}

export default App