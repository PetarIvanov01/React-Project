import { Link, useParams } from "react-router-dom";
import { CardTitle, CardTopics, DescriptionParagraph, EditGoalStyle, TopicDescription, TopicsImage } from "../../../../styles/ViewsStyles/ProfileStyle/Profile.style";
import { useAuth } from "../../../../contexts/auth";
import { descCutter } from "../../../../util/cutter";

export default function TopicCards({
    title,
    image,
    description,
    _id,
    handleLearnMoreClick
}) {

    const { userId } = useParams();
    const { user } = useAuth();

    const isOwner = user.id === userId;

    const shortDesc = descCutter(description);

    return (
        <CardTopics className="card-topics">
            <TopicsImage src={image} alt="" />

            <CardTitle>
                <p>{title}</p>
            </CardTitle>

            <TopicDescription>
                <DescriptionParagraph>{shortDesc}</DescriptionParagraph>
                <EditGoalStyle>

                    <Link to={_id} onClick={() => handleLearnMoreClick({ image, title, description  })}  >Learn more...</Link>
                    {isOwner ?
                        <div className="owner-buttons">
                            <Link to={`/edit/goal/${_id}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                            <Link to={`/delete/goal/${_id}`}><img src="/imgs/svg/delete.svg" alt="Delete Icon" /></Link>
                        </div>
                        : ''}
                </EditGoalStyle>
            </TopicDescription>

        </CardTopics>
    )
}