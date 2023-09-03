import { Link } from "react-router-dom";
import { CardTitle, CardTopics, DescriptionParagraph, EditGoalStyle, TopicDescription, TopicsImage } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";

export default function TopicCards({
    title,
    image,
    description,
    _id,
    handleLearnMoreClick
}) {


    return (
        <CardTopics className="card-topics">
            <TopicsImage src={image} alt="" />
            <CardTitle>
                <p>{title}</p>
            </CardTitle>
            <TopicDescription>
                <DescriptionParagraph>{description}</DescriptionParagraph>
                <EditGoalStyle>
                    <Link to="#" onClick={() => handleLearnMoreClick("Topic 1")} >Learn more...</Link>
                    <Link to={`/edit/goal/${_id}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                </EditGoalStyle>
            </TopicDescription>
        </CardTopics>
    )
}