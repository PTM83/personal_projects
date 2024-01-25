import { useState, useEffect } from 'react'

//Import Components
import { NavBarCoins } from '../src/components/NavBarCoins.jsx'
import { HeaderCoins } from '../src/components/HeaderCoins.jsx'
import { MainCoins } from '../src/components/MainCoins.jsx'
import { FooterCoins } from '../src/components/FooterCoins.jsx'

//Data de CSS
import '../style.css'
//Data de JavaScript
import {getApiState, getApiMoneda} from '../src/services/setFunctionCoins.js'

export const App = () => {

const monedas = ['dolar', 'euro'];

const [data, setData] = useState({});
// const [indexCoins, setIndexCoins] = useState('');

const [historic, setHistoric] = useState([]);//<---DataBase de acuerdo al cambio de moneda
const [money, setMoney] = useState('dolar') //<---Que cambie de acuerdo a dolar o euro


useEffect( () => {
    getApiState(setData);
}, [])

useEffect(() => {
    getApiMoneda(setHistoric, money)
}, [money])


//Obtener las diferentes monedas a obtener
const differentCoins = Object.keys(data).slice(3, -1)
// console.log(differentCoins)
// console.log(Object.keys(data.dolar))
// console.log(data.dolar.valor)

const handleCoins = (event) => {
    setIndexCoins(event.target.value);
}

    return (
        <div className='container'>
            <HeaderCoins />
            <NavBarCoins Completedata={historic} />

{/*             <label> */}
{/*                 <input type="datetime-local" /> */}
{/*             </label> */}

{/*             <select onChange={handleCoins} value={indexCoins} className="selectCoins"> */}
{/*                 <option value=''> Todas las monedas </option> */}
{/*                 {differentCoins && differentCoins.map((coins,index) => ( */}
{/*                     <option key={index} value={coins}> {coins} </option> */}
{/*                 ))} */}
{/*             </select> */}

            <MainCoins database={historic} />

            <FooterCoins />

        </div>
    )
}