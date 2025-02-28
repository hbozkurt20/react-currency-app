import React, { useEffect, useState } from 'react'
import "../component-css/currency.css"
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios"

const baseUrl = `https://api.freecurrencyapi.com/v1/latest`
const apiKey = `fca_live_MM5jPiX71FUi1fmFaxYbG0X0XoxzE7TEjpvzBv9K`

//! axios ile veri alışverişi yapabilmen için axios kütüphanesini npm ile install etmen gerek
//! npm install axios

function Currency() {
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0)
 
    const exchange = async () => {

    const response = await axios.get(`${baseUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
    //! obje olan bir verinin içinden ver seçmek istersen köşeli parantez ile keyi şu olanı getir diyeblirsin  

    calculate(response);
    }

    const calculate = (response) => {
        let result = Number((response.data.data[toCurrency] * amount).toFixed(2)) ;
        setResult(result)
    }

    return (
        <div className='main-container'>


            <div className='currency-container'>
                <input type="number" className='amonunt'  onChange={(e) => setAmount(e.target.value)} />

                <div className='select-container'>

                    <select className="from-currency-option select" onChange={(e) => setFromCurrency(e.target.value)}>
                        <option >USD</option>
                        <option >TRY</option>
                        <option>EUR</option>
                        <option>CAD</option>
                        <option>GBP</option>
                        <option>JPY</option>
                        <option>RUB</option>
                    </select>

                    <FaArrowRightLong className='arrow-icon' />

                    <select className="to-currency-option select" onChange={(e) => setToCurrency(e.target.value)}>
                        <option>TRY</option>
                        <option >USD</option>
                        <option>EUR</option>
                        <option>CAD</option>
                        <option>GBP</option>
                        <option>JPY</option>
                        <option>RUB</option>
                    </select>
                </div>

                <input value={result} onChange={e => setResult(e.target.value)} type="number" id="result" readOnly />
            </div>

            <button className='change' onClick={() => exchange()}>Change</button>

        </div>



    )
}

export default Currency