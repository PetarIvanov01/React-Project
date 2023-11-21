import { Topics } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";

import TopicCardsView from "./TopicsView";

export default function TopicsContainer({ goals }) {

    return (
        <Topics >
            <h2 className="title-goals">Personal Goals</h2>

            <TopicCardsView goals={goals} />

        </Topics>
    )
}