import { Link } from "react-router-dom";
import { CardTitle, CardTopics, Cards, DescriptionParagraph, TopicDescription, TopicsImage } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { useState } from "react";
import InformationBox from "./InformationBox";

export default function TopicCardsView() {

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

                <CardTopics className="card-topics">
                    <TopicsImage src="/imgs/goals-1.png" alt="" />
                    <CardTitle>
                        <p>Top 5 ways to improve your career</p>
                    </CardTitle>
                    <TopicDescription>
                        <DescriptionParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum interdum maximus. Maecenas consectetur eros sit amet dapibus placerat. Suspendisse non lacus at nisl imperdiet euismod id quis nisl. Quisque feugiat fermentum hendrerit erat curae.</DescriptionParagraph>
                        <Link to="#" onClick={() => handleLearnMoreClick("Topic 1")} >Learn more...</Link>
                    </TopicDescription>
                </CardTopics>

                <CardTopics className="card-topics">
                    <TopicsImage src="/imgs/goals 2.png" alt="" />
                    <CardTitle>
                        <p>Top 5 ways to improve your career</p>
                    </CardTitle>
                    <TopicDescription>
                        <DescriptionParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum interdum maximus. Maecenas consectetur eros sit amet dapibus placerat. Suspendisse non lacus at nisl imperdiet euismod id quis nisl. Quisque feugiat fermentum hendrerit erat curae.</DescriptionParagraph>
                        <Link to="#" onClick={() => handleLearnMoreClick("Topic 2")}>Learn more...</Link>
                    </TopicDescription>
                </CardTopics>

            </Cards>
            <InformationBox isVisible={showInformationBox} topic={selectedTopic} onClose={handleCloseBox} />
        </>
    )
}