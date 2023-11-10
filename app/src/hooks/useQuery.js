import { useLocation } from "react-router-dom";

export default function useQuery() {
    const params = useLocation();

    const endpoint = params.search;
    const queriesArr = params.search.substring(1).split(/=|&/);
    const queriesObj = {}
    
    if (endpoint) {
        for (let i = 0; i < queriesArr.length; i++) {
            queriesObj[queriesArr[i]] = queriesArr[++i];
        }
    }

    return { endpoint, queriesObj }
}