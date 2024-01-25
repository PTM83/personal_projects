import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../services/GraphicCoins.css'
import { averageArray } from '../services/setFunctionCoins.js'

export const GraphicCoins = ({database}) => {

    if(!database || database.length===0) {
        return null;
    }

const MinimumSalary = [343150, 460000]
const historicData = [...database].map(prueba => ({
                        fecha:prueba.fecha.slice(0,10),
                        valor:prueba.valor,
                        salary1:+((MinimumSalary[0]/prueba.valor).toFixed(2)),
                        salary2:+((MinimumSalary[1]/prueba.valor).toFixed(2))
                        }));

const initialValue = 0;
const totalData = [...historicData].length;
const eachDolar = [...historicData].map(dolar => dolar.valor);
const eachSalary1 = [...historicData].map(dolar => dolar.salary1);
const eachSalary2 = [...historicData].map(dolar => dolar.salary2);


//Average value of Dolar, Salary1 and Salary2
const averageDolar = averageArray(eachDolar)
const averageSalary1 = averageArray(eachSalary1)
const averageSalary2 = averageArray(eachSalary2)


    return(
        <section className='graphicGrid'>
             <p className='firstParagraph'>
                De un total de {totalData} observaciones obtenidas mediante API, se presenta la evolución
                del dólar observado como se presenta en el siguiente gráfico:
             </p>

            <LineChart width={1000} height={450} data={[...historicData.reverse()]} margin={{top: 5, right: 30, left: 20, bottom: 5 }} >
                <XAxis dataKey="fecha"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    label={{
                        value:'Fechas',
                        position:'insideBottomRight',
                        offset: -20,
                        style:{fontWeight:'bold', textTransform:"uppercase"}
                    }}
                />
                <YAxis domain={['dataMin', 'dataMax']}
                    tickFormatter={ (value) => `${value}` }
                    label={{
                        value:'Dolar',
                        angle:-90,
                        position:'insideLeft',
                        style:{textAnchor:'middle', fontWeight:'bold', textTransform:"uppercase"},
                        offset: -10
                    }}
                />
                <Tooltip
                formatter={ (value,name,props) => [`(${props.payload.fecha}, ${value})`]}
                />
                <CartesianGrid stroke="#bbbb" strokeDasharray = "15 5"/>
                <Line typee="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Legend width={110}
                    wrapperStyle={{
                    top: 160,
                    right: 40,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #d5d5d5',
                    borderRadius: 3,
                    lineHeight: '25px'
                }}
                />


            </LineChart>
        <div className='row3'>
            <p className='secondParagraph'>
                Del gráfico se desprende que la media del dólar observado equivale a {averageDolar} pesos chilenos.
                Valor relevante al momento de observar la evolución del salario mínimo que se presenta
                en Chile, el cual consta de dos rangos de valores, el primer rango va entre personas
                menores de 18 años y mayores de 65 años, pueden recibir un sueldo de {MinimumSalary[0]} pesos chilenos.
                Para personas que esten en el rango de 18 y 65 años, pueden recibir un salario mínimo
                equivalente a {MinimumSalary[1]} pesos chilenos.
            </p>
            <h3>¿Cómo puede influir la volatilidad del dólar observado respecto al salario mínimo?</h3>
            <p className='thirdParagraph'>
                Dada la fluctuación que presenta el dólar, se observa que el salario mínimo, para ambos grupos,
                también se ve afectado si se realiza la conversión del salario mínimo a dólar observado. En el
                siguiente gráfico se observa como el salario mínimo se va depreciando a través del tiempo ante una
                variación del dólar.
            </p>
        </div>
        <LineChart width={1000} height={450} data={[...historicData]} margin={{top: 5, right: 30, left: 20, bottom: 5 }} >
                <XAxis dataKey="fecha"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    label={{
                        value:'Fechas',
                        position:'insideBottomRight',
                        offset: -20,
                        style:{fontWeight:'bold', textTransform:"uppercase"}
                    }}
                />
                <YAxis domain={['dataMin', 'dataMax']}
                    tickFormatter={ (value) => `${value}` }
                    label={{
                        value:'Salario Mínimo',
                        angle:-90,
                        position:'insideLeft',
                        style:{textAnchor:'middle', fontWeight:'bold', textTransform:"uppercase"},
                        offset: -10
                    }}
                />
                <Tooltip
                formatter={ (value,name,props) => [`(${props.payload.fecha}, ${value})`]}
                />
                <CartesianGrid stroke="#bbbb" strokeDasharray = "15 5"/>
                <Line type="monotone" dataKey="salary1" stroke="#D04848" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="salary2" stroke="#F3B95F" activeDot={{ r: 8 }}/>
                <Legend width={180}
                    wrapperStyle={{
                    top: 100,
                    right: 40,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #d5d5d5',
                    borderRadius: 3,
                    lineHeight: '25px',
                    fontSize:'0.85rem',
                    textTransform:'lowercase'
                }}
                />
            </LineChart>
            <div className='row4'>
                <h3>Impacto de la variación del dólar en los salarios mínimos.</h3>

                <p className='fourParagraph'>
                    Las leyendas que se presentan en el gráfico anterior se encuentran definida de la siguiente
                    forma:
                </p>

                <ul>
                    <li>
                        <b>SALARY1</b>; corresponde al salario de las personas que son menores de 18 años y mayors de 65 años.
                    </li>
                    <li>
                        <b>SALARY2</b>; corresponde al salario de las personas que se encuentra en el rango de edad 18 y 65 años.
                    </li>
                </ul>

                <p className='fiveParagraph'>
                    En base al gráfico que refleja la fluctuación del salario mínimo, de ambos rangos de edades. Si se procede a
                    determinar la media del sueldo, respecto a su cambio de dólares, se obtienen los siguientes datos:
                </p>

                <ul>
                    <li>
                        <b>Salary1</b>; presenta un salario promedio en dólares de {averageSalary1}USD.
                    </li>
                    <li>
                        <b>Salary2</b>; presenta un salario promedio en dólares de {averageSalary2}USD.
                    </li>
                </ul>

                <p className='sixParagraph'>
                    Uno de los factores que se pueden destacar del gráfico que presenta la fluctuación que presentan los
                    salarios mínimos, se presenta el valor mínimo y máximo, como también la diferencia que presenta ambos
                    valores.
                </p>

                <ul>
                    <li>
                        <b>Salary1</b>; presenta un valor mínimo de {Math.min(...eachSalary1)} USD y su valor máximo que presenta es {Math.max(...eachSalary1)} USD.
                        Lo que genera una delta de {(Math.max(...eachSalary1) - Math.min(...eachSalary1)).toFixed(2)} USD.
                    </li>
                    <li>
                        <b>Salary2</b>; presenta un valor mínimo de {Math.min(...eachSalary2)} USD y su valor máximo que presenta es {Math.max(...eachSalary2)} USD.
                        Lo que genera una delta de {(Math.max(...eachSalary2) - Math.min(...eachSalary2)).toFixed(2)} USD.
                    </li>
                </ul>
            </div>

            <div className='row5'>
                <h3>Conclusiones.</h3>

                <ul>
                    <li>
                        <b>Rango de Variabilidad:</b> La diferencia entre los valores mínimos y máximos para ambos salarios indica la variabilidad del poder adquisitivo en
                        dólares de los individuos que ganan salarios mínimos debido a las fluctuaciones del tipo de cambio.
                        Una delta de {(Math.max(...eachSalary1) - Math.min(...eachSalary1)).toFixed(2)} USD
                         para SALARY1 y {(Math.max(...eachSalary2) - Math.min(...eachSalary2)).toFixed(2)} USD
                        para SALARY2 muestra un rango de cambio en el poder adquisitivo durante el período observado.
                    </li>
                    <li>
                        <b>Mayor Variabilidad para SALARY2:</b> La delta más grande para SALARY2 sugiere que los trabajadores de 18 a 65 años experimentan una mayor variabilidad
                        en el poder adquisitivo en dólares que los trabajadores menores de 18 o mayores de 65 años. Esto podría indicar que los trabajadores en el rango de
                        18 a 65 años están más expuestos a las consecuencias de la volatilidad del tipo de cambio.
                    </li>
                    <li>
                        <b>Impacto del Tipo de Cambio:</b> Dado que estas deltas son directamente atribuibles a las fluctuaciones en el tipo de cambio, podemos concluir que los
                        movimientos en el valor del dólar tienen un impacto tangible en el valor en dólares de los salarios mínimos, afectando así el poder adquisitivo de
                        los trabajadores que ganan estos salarios.
                    </li>
                </ul>
            </div>
        </section>

    )
}