import http from './httpService';
import proxy from './../config/proxy.json';
export function httpRegister(
    name,
    family,
    username,
    email,
    password,
    bornDate
) {
    return http.post(proxy.api_register, {
        name,
        family,
        username,
        email,
        password,
        bornDate,
    });
}
