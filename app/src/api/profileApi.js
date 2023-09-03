import * as api from "./requester"

const endpoints = {

    create: "user/profile",
    details: (id) => `user/profile/${id}`,
    edit: (id) => `user/profile/${id}`,

};

export function createProfile(data) {

    return api.post(endpoints.create, data)
}
export function getProfileDetails(id) {
    return api.get(endpoints.details(id))
}