import { useCatalogGoals } from "../../../../contexts/catalog";
import { CatalogCardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"
import Card from "./Card";

export default function CatalogCardsContainer() {

    const { goals } = useCatalogGoals();

    if (goals.length === 0) {
        return <h2>Oops! Looks like we're all alone in the profile party!</h2>
    }

    return (

        <CatalogCardsStyle >

            {goals.map(g => <Card key={g._id} {...g} />)}

        </CatalogCardsStyle >
    )
}