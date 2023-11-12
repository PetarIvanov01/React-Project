import { useEffect, useState } from "react";
import { SearchContainer, SearchInput } from "../../../../styles/ViewsStyles/GoalsStyle/Search.style";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";

export default function SearchForm() {

    const navigate = useNavigate();
    const [query, setSearchQuery] = useState({
        search: ''
    });

    const debouncedQuery = useDebounce(query);

    const onChangeHandler = (e) => {
        setSearchQuery((state) => {
            return { ...state, [e.target.name]: e.target.value }
        });
    }

    useEffect(() => {
        if (debouncedQuery.search) {
            navigate(`/goals?search=${debouncedQuery.search}`);
        }
        else {
            navigate(`/goals`);
        }
    }, [debouncedQuery])

    return (
        <SearchContainer>
            <form >
                <SearchInput
                    type="text"
                    name="search"
                    onChange={onChangeHandler}
                    value={query.search}
                    placeholder="Search by name ..." />
            </form>
        </SearchContainer>
    )
}
