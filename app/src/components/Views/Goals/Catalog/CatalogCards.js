import { useCatalogGoals } from "../../../../contexts/catalog";
import LoadingSpinner from "../../../../styles/LoadingSpinner.style";
import { CatalogCardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"
import Card from "./Card";

export default function CatalogCardsContainer() {

    const { goals } = useCatalogGoals()


    return (

        <CatalogCardsStyle >

            {goals.length !== 0 ? goals.map(g => <Card key={g._id} {...g} />) 
            : 
            <LoadingSpinner />}

        </CatalogCardsStyle >

    )
}