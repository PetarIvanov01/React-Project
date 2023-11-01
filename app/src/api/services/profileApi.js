import * as api from "../requester"

const endpoints = {

    create: 'user/profile',
    details: (id) => `user/profile/${id}`,
    edit: (id) => `user/profile/${id}`,
    follow: 'user/profile/follow',
    unfollow: 'user/profile/un-follow'

};

export function createProfile(data) {
    return api.post(endpoints.create, data);
}

export function getProfileDetails(id) {
    return api.get(endpoints.details(id));
}

export function editProfile(id, data) {
    return api.put(endpoints.edit(id), data);
}

export function followProfile(data) {
    return api.put(endpoints.follow, data);
}

export function unFollowProfile(data) {
    return api.put(endpoints.unfollow, data);
}

