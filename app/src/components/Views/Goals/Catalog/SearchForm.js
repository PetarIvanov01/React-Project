import { useState } from "react";
import { SearchContainer, SearchInput } from "../../../../styles/ViewsStyles/GoalsStyle/Search.style";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {

    const navigate = useNavigate();

    const [query, setSearchQuery] = useState({
        username: ''
    });
    
    const onChangeHandler = (e) => {
        setSearchQuery((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmitHandler(e) {
        e.preventDefault();

        if (query.username) {
            navigate(`/goals?username=${query.username}`);
        }
        else {
            navigate(`/goals`);
        }
    }


    return (
        <SearchContainer>
            <form onSubmit={onSubmitHandler}>
                <SearchInput type="text" name="username" onChange={onChangeHandler} value={query.username} placeholder="Search by name ..." />
            </form>
        </SearchContainer>
    )
}