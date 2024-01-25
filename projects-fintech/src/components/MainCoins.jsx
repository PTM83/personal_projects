import {GraphicCoins} from './GraphicCoins.jsx'
// import '../services/TableCoins.css'

export const MainCoins = ({ database }) => {

    return (
    <main>
{/*         <h2>{indexCoins && data[indexCoins] ? data[indexCoins].valor : 'Seleccionar una moneda'}</h2> */}


{/*         <table className='TableCoins'> */}
{/*             <caption> */}
{/*                 Histórico de valor del dólar en los últimos 30 días */}
{/*             </caption> */}
{/*             <thead> */}
{/*                 <tr> */}
{/*                     <th>Fecha</th> */}
{/*                     <th>Valor</th> */}
{/*                 </tr> */}
{/*             </thead> */}
{/*             <tbody> */}
{/*                 {database && [...database].map(money => */}
{/*                     <tr key={money.fecha.slice(0,10)}> */}
{/*                         <td> {money.fecha.slice(0,10)} </td> */}
{/*                         <td> {money.valor} </td> */}
{/*                     </tr> */}
{/*                 )} */}
{/*             </tbody> */}
{/*         </table> */}

     <h2> Article Heading </h2>

    <GraphicCoins database={database} />

    </main>

    )
}