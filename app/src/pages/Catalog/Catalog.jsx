import GoalsProvider from "../../contexts/catalog"

import { Container } from "../../styles/ViewsStyles/CatalogStyle/Container.style"

import CatalogCardsContainer from "./CatalogCards"
import SearchForm from "../../components/Features/SearchForm"
import Pagination from "../../components/Features/Pagination"

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