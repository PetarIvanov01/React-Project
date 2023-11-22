import { LikeStyle } from "../../../../styles/ViewsStyles/FeaturesStyle/Likes.style";

import { likeGoal, unLikeGoal } from "../../../../api/services/goalsApi";
import useErrorBoundryAsync from "../../../../hooks/useErrorBoundryAsync";

export default function LikePost({
    setLike,
    userId,
    postId,
    isLike,
}) {

    const throwToErrBoundry = useErrorBoundryAsync()

    const data = {
        currentUserId: userId,
        postId
    }

    async function onLikeClick(e, like) {
        try {
            setLike();
            if (like) {
                await likeGoal(data);
            }
            else {
                await unLikeGoal(data);
            }
        }
        catch (error) {
            throwToErrBoundry(error);
        }
    }

    return (
        <LikeStyle>
            {isLike ?
                <img src="/imgs/Icons/isLiked.png" onClick={(e) => onLikeClick(e, false)} alt="like" />
                :
                <img src="/imgs/Icons/notLiked.png" onClick={(e) => onLikeClick(e, true)} alt="un-like" />
            }
        </LikeStyle>
    )
}