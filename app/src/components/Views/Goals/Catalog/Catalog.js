import GoalsProvider from "../../../../contexts/catalog"
import { Container } from "../../../../styles/ViewsStyles/GoalsStyle/Container.style"

import Pagination from "../Pagination/Pagination"
import CatalogCardsContainer from "./CatalogCards"
import SearchForm from "./SearchForm"

export default function CatalogView() {


    return (
        <Container>

            <GoalsProvider>

                <SearchForm />

                <CatalogCardsContainer />

                <Pagination />

            </GoalsProvider>
        </Container>
    )
}