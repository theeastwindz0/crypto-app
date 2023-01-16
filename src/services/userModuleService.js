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