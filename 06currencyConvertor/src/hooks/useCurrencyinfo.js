import { useState, useEffect} from "react";


function useCurrencyInfo(currency){
    const [data, setDate] = useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setDate(res[currency]))
        console.log(data);
        
    },
     [currency])
     console.log(data);
     return data
}

export default useCurrencyInfo;




//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json