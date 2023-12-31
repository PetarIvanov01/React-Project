import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Topics } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { Cards } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import InformationBox from "../InformationBox";
import TopicCards from "./TopicCard";

export default function TopicsContainer({ goals }) {

    const [showInformationBox, setShowInformationBox] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState({});

    const navigate = useNavigate();

    const handleLearnMoreClick = (topic) => {
        setSelectedTopic(topic);
        setShowInformationBox(true);
    };

    const handleCloseBox = () => {
        navigate(-1)
        setSelectedTopic({});
        setShowInformationBox(false);
    };

    return (
        <Topics >
            <h2 className="title-goals">Personal Goals</h2>

            <Cards>
                {goals?.map(g => <TopicCards key={g._id} {...g} handleLearnMoreClick={handleLearnMoreClick} />)}
            </Cards>

            <InformationBox isVisible={showInformationBox} topic={selectedTopic} onClose={handleCloseBox} />
        </Topics>
    )
}