import { useState } from "react";
import { CommentInput, CommentInputContainer, CommentSubmitButton } from "../../../../styles/ViewsStyles/FeaturesStyle/Comments/CommentForm.style";
import { useCommentsContext } from "../../../../contexts/comments";

export default function ComponentInputComponent() {

    const { addComment, onClickResetForm, reply } = useCommentsContext()
    const [comment, setComment] = useState('')

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    async function onSubmitComment(e) {
        e.preventDefault();

        const payload = { comment }

        if (reply.isReply) {
            payload.parentId = reply.parentId
        }

        await addComment(payload);
        onClickResetForm();
        setComment('');
    };

    return (
        <CommentInputContainer>
            {reply.isReply ? <h1>Reply to - {reply.name}</h1> : <h1>Write</h1>}
            <CommentInput
                value={comment}
                onChange={handleCommentChange}
                placeholder="Type your comment here..."
            />
            <CommentSubmitButton onClick={onSubmitComment}>
                Submit
            </CommentSubmitButton>
        </CommentInputContainer>
    )
}