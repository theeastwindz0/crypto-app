import Details from './screens/Details';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

export const ALL_LINKS={
    Signup:{
        name:'Signup',
        component:Signup,
        loginRequire:false
    },
    Login:{
        name:'Login',
        component:Login,
        loginRequire:false
    },
    Home:{
        name:'Home',
        component:Home,
        loginRequire:true
    },
    Details:{
        name:'Details',
        component:Details,
        loginRequire:true
    },
};


const API_ACCOUNT_DOMAIN='http://localhost:5001';
const BASE_USER=API_ACCOUNT_DOMAIN + '/api/user/';
const BASE_DATA_API='https://api.coingecko.com/api/';

export const USER_URL={
    signup:BASE_USER+'signup',
    login:BASE_USER+'login',
}

export const DATA_URL={
    getCoins:BASE_DATA_API+'v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
}
