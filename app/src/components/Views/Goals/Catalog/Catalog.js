import { Container } from "../../../../styles/ViewsStyles/GoalsStyle/Container.style"
import { SearchContainer, SearchInput } from "../../../../styles/ViewsStyles/GoalsStyle/Search.style"
import Pagination from "../Pagination/Pagination"
import CatalogCardsContainer from "./CatalogCards"

export default function CatalogView() {


    return (
        <Container>
            
            <SearchContainer>
                <form >
                    <SearchInput type="text" placeholder="Search by name or category" />
                </form>
            </SearchContainer>

            <CatalogCardsContainer />

            <Pagination />

        </Container>
    )
}