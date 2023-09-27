import { useCatalogGoals } from "../../../../contexts/catalog";
import LoadingSpinner from "../../../../styles/LoadingSpinner.style";
import { CatalogCardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"
import Card from "./Card";

export default function CatalogCardsContainer() {

    const { goals, hasGoals } = useCatalogGoals();

    if (goals.length === 0 && hasGoals) {
        return <h2>Oops! Looks like we're all alone in the profile party!</h2>
    }

    return (

        <CatalogCardsStyle >

            {hasGoals ? goals.map(g => <Card key={g._id} {...g} />)
                :
                <LoadingSpinner />}

        </CatalogCardsStyle >

    )
}