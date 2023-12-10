import React from "react";
import transformDate from "../../../../util/transformDate.js";
import {
    Controllers,
    CommentsList,
    CommentItem,
    CommentAvatar,
    CommentBox,
    CommentContent,
    CommentHead,
    CommentMainLevel,
    CommentName,
    CommentTimeStatus
} from "../../../../styles/ViewsStyles/FeaturesStyle/Comments/CommentsList.style.js";
import notLiked from "/imgs/Icons/notLiked.png";
// import liked from "/imgs/Icons/isLiked.png";
import reply from "/imgs/Icons/reply.png";
import close from "/imgs/svg/close.svg"

function ReusableComment({
    comment,
    userId,
    isAuthor,
    isReply,
    onClickSetReplyForm,
    onClickResetForm,
    isReplyOnParrent
}) {

    console.log(isReplyOnParrent);

    const handleReplyClick = () => {
        onClickSetReplyForm({ name: comment.ownerIdProfile?.username, parentId: comment._id });
    };

    return (
        <CommentsList key={comment._id}>
            <CommentItem >

                <CommentMainLevel>

                    <CommentAvatar $isreply={isReply}>
                        <img src={comment.ownerIdProfile?.avatarImg.value} alt={comment.ownerIdProfile?.avatarImg.label} />
                    </CommentAvatar>

                    <CommentBox $isreply={isReply}>

                        <CommentHead $isreply={isReply}>

                            <CommentName $isauthor={isAuthor}>
                                <span>{comment.ownerIdProfile?.username}</span>
                            </CommentName>

                            <CommentTimeStatus>
                                <span>{transformDate(comment.createdAt)} </span>
                                <Controllers>
                                    <img src={notLiked} className="heart" itemID={comment._id} alt="notLiked" />
                                    {
                                        comment.depth < 3 &&
                                        (
                                            isReplyOnParrent === comment._id ?
                                                <img onClick={onClickResetForm} key={comment._id} src={close} alt="close" />
                                                :
                                                < img onClick={handleReplyClick} key={comment._id} src={reply}
                                                    className="reply"
                                                    alt="reply" />
                                        )
                                    }
                                </Controllers>
                            </CommentTimeStatus>

                        </CommentHead>

                        <CommentContent $isreply={isReply}>{comment.message}</CommentContent>

                        {comment.children.map((comment) =>
                            <ReusableComment
                                userId={userId}
                                key={comment._id}
                                comment={comment}
                                isAuthor={(comment.ownerId === userId).toString()}
                                isReply={(comment.depth > 1).toString()}
                                isReplyOnParrent={isReplyOnParrent}
                                onClickSetReplyForm={onClickSetReplyForm}
                                onClickResetForm={onClickResetForm}
                            />)}

                    </CommentBox>

                </CommentMainLevel>

            </CommentItem>
        </CommentsList>
    )
}
export default React.memo(ReusableComment)