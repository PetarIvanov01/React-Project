import * as api from "../requester"

const endpoints = {
    query: (url) => `goals${url}`,
    catalog: "goals",
    create: "goals",
    edit: (id) => `goals/${id}`,
    details: (id) => `goals/${id}`,
    delete: (id) => `goals/${id}`,
    home: "goals/home?limit=2",
    like: 'goals/like',
    unlike: 'goals/un-like'

};

export async function getCatalog(url) {
    if (url) {
        return api.get(endpoints.query(url));
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
export async function likeGoal(data) {

    return api.post(endpoints.like, data)
}
export async function unLikeGoal(data) {

    return api.post(endpoints.unlike, data)
}
