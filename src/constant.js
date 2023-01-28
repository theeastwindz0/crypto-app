import Details from './screens/Details';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import UserDetails from './screens/UserDetails';
import News from './screens/News';

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
    UserDetails:{
        name:'UserDetails',
        component:UserDetails,
        loginRequire:true
    },
    News:{
        name:'News',
        component:News,
        loginRequire:true
    },
};


const API_ACCOUNT_DOMAIN='http://localhost:5001';
const BASE_USER=API_ACCOUNT_DOMAIN + '/api/user/';
const BASE_DATA_API='https://api.coingecko.com/api/';

export const USER_URL={
    signup:BASE_USER+'signup',
    login:BASE_USER+'login',
    fetchLiked:API_ACCOUNT_DOMAIN+'/liked/getAllLiked',
    addLiked:API_ACCOUNT_DOMAIN+'liked/addToLikedList'
}

export const DATA_URL={
    getCoins:BASE_DATA_API+'v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
}
