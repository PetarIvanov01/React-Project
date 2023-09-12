import { CardContainerStyle } from "../../../styles/ViewsStyles/HomeStyle/CardsContainer.style";
import Card from "./Card";
import { useCatalogGoals } from "../../../contexts/catalog";
import LoadingSpinner from "../../../styles/LoadingSpinner.style";
import { useState } from "react";

export default function CardContainer() {

    const { goals } = useCatalogGoals();
    const [load, setSpinner] = useState(false);

    return (
        <CardContainerStyle >

            {goals.length !== 0 ? goals.map(g => <Card key={g._id} {...g} />)

                :
                <>
                    <LoadingSpinner setSpinner={setSpinner} />
                    <Card />
                </>}

        </CardContainerStyle>

    )
}