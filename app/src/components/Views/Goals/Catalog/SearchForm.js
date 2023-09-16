import { useState } from "react";
import { SearchContainer, SearchInput } from "../../../../styles/ViewsStyles/GoalsStyle/Search.style";
import { searchByName } from "../../../../api/services/goalsApi";
import { useCatalogGoals } from "../../../../contexts/catalog";

export default function SearchForm() {

    const { setGoalsData } = useCatalogGoals();

    const [query, setSearchQuery] = useState({
        search: ''
    });

    const onChangeHandler = (e) => {
        return setSearchQuery((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        const { items } = await searchByName(query.search);
        setGoalsData(items);

        setSearchQuery(() => ({ search: '' }));
    }

    
    return (
        <SearchContainer>
            <form onSubmit={onSubmitHandler}>
                <SearchInput type="text" name="search" onChange={onChangeHandler} value={query.search} placeholder="Search by name ..." />
            </form>
        </SearchContainer>
    )
}