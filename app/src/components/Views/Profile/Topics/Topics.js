import TopicCardsView from "./TopicsView";
import { Topics } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";

export default function TopicsContainer({ goals }) {


    return (
        <Topics >
            <h2>Topics</h2>

            <TopicCardsView goals={goals} />

        </Topics>
    )
}