import * as api from "./requester"

export function getUserData() {

    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {

    localStorage.removeItem('userData');
}

export function setUserData(user) {

    localStorage.setItem('userData', JSON.stringify(user));
}

export const login = api.onLogin;
export const register = api.onRegister;
export const logout = api.onLogout;