import { useState } from "react";
import { CommentInput, CommentInputContainer, CommentSubmitButton } from "../../../../styles/ViewsStyles/ProfileStyle/Comments.style";

export default function ComponentInputComponent({ addComment }) {

    const [comment, setComment] = useState('')

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    async function onSubmitComment(e) {
        e.preventDefault();

        await addComment(comment)
    }
    return (
        <CommentInputContainer>
            <h1>Write</h1>
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