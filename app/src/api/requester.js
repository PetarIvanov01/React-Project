import { clearUserData, getUserData } from "./user.js";

let host = 'http://localhost:5000/api/';

async function request(url, option) {

    try {
        const response = await fetch(host + url, option);

        if (response.ok === false) {
            if (response.status === 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status === 204) {
            return response
        }
        else {
            return response.json()
        }

    }
    catch (error) {
        throw error
    }

}

function createOptions(method = 'get', data) {

    const option = {
        method,
        headers: {}
    }

    const user = getUserData();
    if (user !== null) {
        option.headers['Authorization'] = user.token;
    }


    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    return option;
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('PUT', data));
}

export async function del(url) {
    return await request(url, createOptions('DELETE'));
}

const endPoints = {
    login: 'user/login',
    register: 'user/register',
    logout: 'user/logout'
}

export async function onLogin(email, password) {

    const user = await post(endPoints.login, { email, password });
    return setDataToLocaleSt(user);

}

export async function onRegister(email, password) {

    const user = await post(endPoints.register, { email, password });
    return setDataToLocaleSt(user);

}

export function onLogout() {

    clearUserData();

    return null;
}

function setDataToLocaleSt(user) {

    const userData = {
        email: user.email,
        token: user.token,
        id: user._id
    }

    // setUserData(userData);

    return userData;
}