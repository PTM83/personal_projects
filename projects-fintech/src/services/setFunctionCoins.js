
export const getApiState = async (setData) => {
    const urlAPI = 'https://mindicador.cl/api'

    try{
        const response = await fetch(urlAPI);
        const data = await response.json();
        setData(data)
    } catch(error) {
        console.log(error)
    }
}

export const getApiMoneda = async (setData, moneda) => {
    const urlAPI = `https://mindicador.cl/api/${moneda}`

    try {
        const response = await fetch(urlAPI);
        const data = await response.json();
        setData(data.serie)
    } catch(error) {
        console.log(error)
    }
}

export function averageArray(dataArray) {
    const initialValue = 0
    const ans = dataArray.reduce((DolarAccumulator, currentDolar) =>
                                    DolarAccumulator + currentDolar + initialValue);
    const averageData = +((ans/dataArray.length).toFixed(2))

    return averageData;
}
