import * as api from "./requester"
export * as api from "./requester"

export const login = api.onLogin;
export const register = api.onRegister;
export const logout = api.onLogout;

const endpoints = {

    catalog: "goals",
    create: "goals",
    edit: (id) => `goals/${id}`,
    details: (id) => `goals/${id}`,
    delete: (id) => `goals/${id}`,
    home: "goals?limit=2"
    // search: (query) => `data/shoes?where=brand%20LIKE%20%22${query}%22`,

};

export async function getCatalog() {

    return api.get(endpoints.catalog);
}
export async function getDataForHome() {

    return api.get(endpoints.home)
}
export async function createGoal(data) {

    return api.post(endpoints.create, data);
}
export async function getDetails(id) {

    return api.get(endpoints.details(id));
}
export async function deleteGoal(id) {

    return api.del(endpoints.delete(id));
}
export async function editGoal(id, data) {

    return api.put(endpoints.edit(id), data)
}
// export async function searchShoes(querry) {

//     return api.get(endpoints.search(querry));
// }