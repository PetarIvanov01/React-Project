import GoalsProvider from "../../../contexts/catalog";
import { SectionCardsStyle } from "../../../styles/ViewsStyles/HomeStyle/SectionCards.style";
import CardContainer from "./CardContainer";

export default function SectionCards() {



    return (
        <SectionCardsStyle >

            <GoalsProvider view={'home'}>

                <CardContainer />

                <div className="more-info">
                    <h3>Two of the most followed people!</h3>
                </div>
            </GoalsProvider>

        </SectionCardsStyle>
    )
}