import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Keys from './Keys.jsx'
import WrapperComponents from './WrapperComponents.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Keys /> */}
    <WrapperComponents></WrapperComponents>
  </React.StrictMode>,
)
