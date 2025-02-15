import { useEffect, useState } from "react"


function App() {
  const [socket , setSocket] = useState<null | WebSocket>(null);
  const [latestMessage , setLatestMessage] = useState("");
  const [message , setMessage] = useState("")
  useEffect( () => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('connected');
      setSocket(socket);
      
    }

    socket.onmessage = (message) => {
      console.log("received message " , message.data);
      setLatestMessage(message.data)
      
    }

    return ( () => {
      socket.close();
    })
  },[])

  if(!socket) {
    return(
      <div>Connecting to server socket...</div>
    )
  }
 return(
  <>
    <input type="text" onChange={(e) => {
      setMessage(e.target.value);
    }} />
    <button onClick={() => {
      socket.send(message)
    }}>send</button>

    {latestMessage}
    
  </>
 )
}

export default App
