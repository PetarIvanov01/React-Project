export default function pageEndpointFunc(queriesObj = {}, endpoint = '', page) {
    if (queriesObj.hasOwnProperty('page')) {
        const result = endpoint.replace(/page=[0-9]+/, `page=${page}`)
        return result;
    }
    else if (Object.keys(queriesObj).length !== 0) {
        return `${endpoint}&page=${page}`
    }
    return `?page=${page}`
}
