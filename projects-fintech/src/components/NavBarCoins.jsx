import '../services/NavBarCoins.css'
export const NavBarCoins = ({ Completedata }) => {

    if(!Completedata || Completedata.length===0) {
        return null;
    }

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// console.log(Completedata[0])
const date = new Date(Completedata[0].fecha);
const dayOfWeek = days[date.getDay()];
const day = date.getDate();
const month = date.toLocaleString('default', {month: 'long'})
const year = date.getFullYear();

    return (
        <nav className='classNav'>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Graphic</li>
            </ul>

            <time dateTime={date.toISOString().slice(0,10)}>
                {`${dayOfWeek}, ${day}`}<sup>th</sup> {`${month} ${year}`}
            </time>
        </nav>
    )
}