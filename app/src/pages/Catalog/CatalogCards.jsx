import { useCatalogGoals } from "../../contexts/catalog";
import { CatalogCardsStyle } from "../../styles/ViewsStyles/CatalogStyle/CatalogCardsStyle.style"
import Card from "../../components/CardUI/Card";

export default function CatalogCardsContainer() {

    const { goals } = useCatalogGoals();

    return (

        <CatalogCardsStyle >

            {goals.length ?
                goals.map(g => <Card key={g._id} {...g} />) 
                :
                <h2 className="no-matches">Oops! Looks like we're all alone in the profile party!</h2>
            }

        </CatalogCardsStyle >
    )
}