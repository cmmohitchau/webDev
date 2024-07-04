import { useEffect, useState } from 'react'

function Effect() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("hi there re-render");


  useEffect( () => {
    setTimeout( () => {
      setBankData({
          income : 100
      });
    } , 3000)
  } , [])


  useEffect( () => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);
  } , [])
  

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default Effect