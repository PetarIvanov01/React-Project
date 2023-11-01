import * as api from "../requester"

export const login = api.onLogin;
export const register = api.onRegister;
export const logout = api.onLogout;

const endpoints = {
    query: (query, data) => `goals?${query}=${data}`,
    catalog: "goals",
    create: "goals",
    edit: (id) => `goals/${id}`,
    details: (id) => `goals/${id}`,
    delete: (id) => `goals/${id}`,
    home: "goals?limit=2",

};

export async function getCatalog(data, query) {

    if (query) {
        return api.get(endpoints.query(query, data));
    }

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
