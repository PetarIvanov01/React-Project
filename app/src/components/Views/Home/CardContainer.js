import { CardContainerStyle } from "../../../styles/ViewsStyles/HomeStyle/CardsContainer.style";
import Card from "./Card";
import { useCatalogGoals } from "../../../contexts/catalog";
import ExampleCard from "./ExampleCard";

export default function CardContainer() {

    const { goals } = useCatalogGoals();

    if (goals.length === 0) {
        return <ExampleCard />
    }

    return (
        <CardContainerStyle >

            {goals.map(g => <Card key={g._id} {...g} />)}

        </CardContainerStyle>

    )
}