import { useMemo , useState , useEffect } from "react";

function Memo() {
    const [exchangeData , setExchangeData] = useState({});
    const [exchangeData1 , setExchangeData1] = useState({});
    const [bankData , setBankData] = useState({});

    useEffect( () => {
        console.log("inside the exchange data ");
        setExchangeData({
            returns : 100
        });
    } , [])

    useEffect( () => {
        console.log("inside the exchange data 1");

        setExchangeData1({
            returns : 100
        });
    } , [])

    useEffect( () => {
        console.log("inside the bank data");
        setTimeout( () => {
            setBankData({
                income : 100
            });
        }, 5000)
    } , [])

    const cryptoReturn = useMemo( () => {
        console.log("inside crypto calculation");
        return exchangeData.returns + exchangeData1.returns
    } , [exchangeData , exchangeData1])

    const incomeTax = (cryptoReturn + bankData.income) * 0.3

    return(
        <>
        hi your income tax is {incomeTax}
        </>
    )


}

export default Memo