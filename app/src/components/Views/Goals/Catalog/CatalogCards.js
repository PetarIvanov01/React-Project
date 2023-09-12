import { useState } from "react";
import { useCatalogGoals } from "../../../../contexts/catalog";
import LoadingSpinner from "../../../../styles/LoadingSpinner.style";
import { CatalogCardsStyle } from "../../../../styles/ViewsStyles/GoalsStyle/CatalogCardsStyle.style"
import Card from "./Card";

export default function CatalogCardsContainer() {

    const { goals } = useCatalogGoals();
    const [load, setSpinner] = useState(false);


    return (

        <CatalogCardsStyle >

            {goals.length !== 0 ? goals.map(g => <Card key={g._id} {...g} />)
                :
                <LoadingSpinner setSpinner={setSpinner} />}

            {load && <h2>Oops! Looks like we're all alone in the profile party!</h2>}

        </CatalogCardsStyle >

    )
}