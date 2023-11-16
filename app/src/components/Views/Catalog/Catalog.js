import GoalsProvider from "../../../contexts/catalog"
import { Container } from "../../../styles/ViewsStyles/CatalogStyle/Container.style"

import CatalogCardsContainer from "./CatalogCards"
import SearchForm from "../../Features/Search/SearchForm"
import Pagination from "../../Features/Pagination/Pagination"

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