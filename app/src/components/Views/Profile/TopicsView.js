import { Cards } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { useState } from "react";
import InformationBox from "./InformationBox";
import TopicCards from "./TopicCard";

export default function TopicCardsView({ goals }) {

    const [showInformationBox, setShowInformationBox] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleLearnMoreClick = (topic) => {
        setSelectedTopic(topic);
        setShowInformationBox(true);
    };

    const handleCloseBox = () => {
        setSelectedTopic(null);
        setShowInformationBox(false);
    };

    return (
        <>
            <Cards className="cards">

                {goals?.map(g => <TopicCards key={g._id} {...g} handleLearnMoreClick={handleLearnMoreClick} />)}

            </Cards>
            <InformationBox isVisible={showInformationBox} topic={selectedTopic} onClose={handleCloseBox} />
        </>
    )
}