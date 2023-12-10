import React from "react";
import { CommentContainer } from "../../../../styles/ViewsStyles/FeaturesStyle/Comments/CommentsList.style.js";
import MemoReusableComment from "./CommentTree.jsx";
import { useCommentsContext } from "../../../../contexts/comments.jsx";

function CommentContainerList({
    user,
}) {
    const {
        comments,
        onClickResetForm,
        onClickSetReplyForm,
        isReplyOnParrent
    } = useCommentsContext();


    return (
        <CommentContainer >
            {comments.map((comment) =>
                <MemoReusableComment
                    userId={user.id}
                    key={comment._id}
                    comment={comment}
                    isAuthor={(comment.ownerId === user?.id).toString()}
                    isReply={(comment.depth > 1).toString()}
                    isReplyOnParrent={isReplyOnParrent}
                    onClickSetReplyForm={onClickSetReplyForm}
                    onClickResetForm={onClickResetForm}
                />)}
        </CommentContainer>
    );
};
export default React.memo(CommentContainerList);