import { useEffect, useState } from "react";
import { Container, Search, Select, SearchInput } from "../../../../styles/ViewsStyles/GoalsStyle/Search.style";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";

export default function SearchForm() {

    const navigate = useNavigate();
    const [query, setSearchQuery] = useState({
        filter: '',
        search: ''
    });

    const debouncedQuery = useDebounce(query);

    const onChangeHandler = (e) => {
        setSearchQuery((state) => {
            return { ...state, [e.target.name]: e.target.value }
        });
    }

    useEffect(() => {
        if (debouncedQuery.search || debouncedQuery.filter) {
            navigate(`/goals?category=${debouncedQuery.filter}&search=${debouncedQuery.search}`);
        }
        else {
            navigate(`/goals`);
        }
    }, [debouncedQuery]);


    return (
        <Container>
            <Search>
                <SearchInput
                    type="text"
                    name="search"
                    onChange={onChangeHandler}
                    value={query.value}
                    placeholder="Search by name and..." />
            </Search>

            <div >
                <Select name="filter" id="filter"
                    value={query.filter}
                    onChange={onChangeHandler}>
                    <option value="">Category</option>
                    <option value="career">Career</option>
                    <option value="sport">Sport</option>
                    <option value="lifestyle">Lifestyle</option>

                </Select>
            </div>
        </Container>
    )
}
