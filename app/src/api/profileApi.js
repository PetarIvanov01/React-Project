import * as api from "./requester"

const endpoints = {

    create: "user/profile",
    edit: (id) => `profile/${id}`,

};

export function createProfile(data) {
    
    return api.post(endpoints.create, data)
}