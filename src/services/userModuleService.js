import { USER_URL } from "../constant";
import http from "./http_service";

export function getSignup(data){
    const url=USER_URL.signup;
    return http.post(url,data);
}