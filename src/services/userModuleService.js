import { DATA_URL, USER_URL } from "../constant";
import http from "./http_service";

export function getSignup(data){
    const url=USER_URL.signup;
    return http.post(url,data);
}

export function getLogin(data){
    const url=USER_URL.login;
    return http.post(url,data);
}

export function getCoins(){
    const url=DATA_URL.getCoins;
    return http.get(url);
}

export function getLiked(){
    const url=USER_URL.fetchLiked;
    return http.get(url);
}

export function addLiked(){
    const url=USER_URL.addLiked;
    return http.post(url,data);
}

export function fetchNews(search){
    const url="https://gnews.io/api/v4/search?q="+search+"&token=811c3dd1f23caeab7fccd24499cc3146";
    return http.get(url);
}