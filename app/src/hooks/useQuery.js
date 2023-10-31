import { useLocation } from "react-router-dom";

export default function useQuery() {
    const params = useLocation();
    const [query, data] = params.search.substring(1).split('=');

    return { query, data }
}