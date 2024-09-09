import React ,{ useState } from 'react'

function App() {
  
  
  return (
    <>
    <MyComponent />
    </>
  )
}

class MyComponent extends React.Component() {
  componentDidMounted() {
    console.log("mounted");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return <div>div 1</div>
  }
}

export default App
