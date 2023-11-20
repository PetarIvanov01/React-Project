import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth";

import { CardTitle, CardTopics, DescriptionParagraph, EditGoalStyle, TopicDescription, TopicsImage } from "../../../../styles/ViewsStyles/ProfileStyle/CardStyle.style";
import { descCutter } from "../../../../util/cutter";

import LikePost from "../Likes/Like";

export default function TopicCards({
    title,
    image,
    description,
    _id,
    likes,
    handleLearnMoreClick
}) {
    const { userId } = useParams();
    const { user } = useAuth();

    const isOwner = user?.id === userId;
    const shortDesc = descCutter(description);

    const [likeInfo, setLikeInfo] = useState({
        isLike: likes.includes(user.id),
        likedUsers: [...likes]
    });

    const setLikes = () => {

        setLikeInfo(state => {
            const likedUsers = [...state.likedUsers];

            const newlyLikedUsers = likedUsers.includes(user.id) ?
                likedUsers.filter(id => id !== user.id)
                :
                [...likedUsers, user.id];

            return { ...state, isLike: !state.isLike, likedUsers: newlyLikedUsers }
        }
        )
    }

    return (
        <CardTopics>
            <TopicsImage src={image} alt="" />

            <CardTitle>
                <p>{title}</p>
            </CardTitle>

            <TopicDescription>
                <DescriptionParagraph>{shortDesc}</DescriptionParagraph>
                <EditGoalStyle>

                    <Link to={_id} onClick={() => handleLearnMoreClick({ image, title, description })}  >Learn more...</Link>
                    <div className="controllers">
                        <p>Likes: {likeInfo.likedUsers.length}</p>
                        {isOwner ?
                            <div className="owner-buttons">
                                <Link to={`/edit/goal/${_id}`}><img src="/imgs/svg/edit.svg" alt="Edit Icon" /></Link>
                                <Link to={`/delete/goal/${_id}`}><img src="/imgs/svg/delete.svg" alt="Delete Icon" /></Link>
                            </div>
                            :
                            <LikePost
                                setLike={setLikes}
                                userId={user?.id}
                                postId={_id}
                                isLike={likeInfo.isLike}
                            />
                        }
                    </div>
                </EditGoalStyle>
            </TopicDescription>

        </CardTopics>
    )
}