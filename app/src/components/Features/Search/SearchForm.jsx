import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Search, Select, SearchInput } from "../../../styles/ViewsStyles/FeaturesStyle/Search.style";
import useDebounce from "../../../hooks/useDebounce";

export default function SearchForm() {
    const navigate = useNavigate();
    const [query, setSearchQuery] = useState({
        filter: '',
        search: ''
    });

    const debouncedValue = useDebounce(query);

    const onChangeHandler = (e) => {
        setSearchQuery((state) => {
            return { ...state, [e.target.name]: e.target.value }
        });
    }

    useEffect(() => {
        if (debouncedValue.search || debouncedValue.filter) {
            navigate(`/goals?category=${debouncedValue.filter}&search=${debouncedValue.search}`);
        }
        else {
            navigate(`/goals`);
        }
    }, [debouncedValue, navigate]);

    return (
        <Container>
            <Search>
                <SearchInput
                    type="text"
                    name="search"
                    onChange={onChangeHandler}
                    value={query.search}
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
