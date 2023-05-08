import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

export const Home =()=>{

    const token = Cookies.get('token')
    if (token == undefined){
        //TODO להעביר ל URL של לוגין
    }
    
    return <>
        <button><Link to='/customer' >אני הולך לחנות ומוכן לקנות מצרכים לאנשים</Link></button>
        <button><Link to ='/shopper'> אני צריך משהו מהחנות, ורוצה שמשהו יקנה לי</Link></button>
    </>
}