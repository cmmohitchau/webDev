import {React , useEffect , useState , useCallback , memo} from "react";

function Callback() {

    const [exchangeData , setExchangeData] = useState({});
    const [exchangeData1 , setExchangeData1] = useState({});
    const [bankData , setBankData] = useState({});

    useEffect( () => {
        setExchangeData( {
            returns : 100
        });
    } , [])

    useEffect( () => {
        setExchangeData1({
            returns : 100
        });
    } , [])

    useEffect( () => {
        setTimeout( () => {
            setBankData({
                income : 100
            });
        } , 5000); 
    } , [])

    const CalculateCryptoReturn = useCallback(() => {
        return exchangeData.returns + exchangeData1.returns;
    } , [exchangeData , exchangeData1])

   

    return (
        <>
        <CryptoReturn calculateCryptoReturn={CalculateCryptoReturn} />
        </>
    )
   
}

const CryptoReturn = memo(function({calculateCryptoReturn}) {
    console.log("crypto child re-rendered");
    return<>
    your crypto are {calculateCryptoReturn()}
    </>
})

export default Callback