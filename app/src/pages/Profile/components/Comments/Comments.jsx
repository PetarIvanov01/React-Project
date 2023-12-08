import { useAuth } from "../../../../contexts/auth.jsx";

import {
    ExitButton,
    Header,
    Container,
} from "../../../../styles/ViewsStyles/ProfileStyle/Comments.style";

import { Link } from "react-router-dom";
import ComponentInputComponent from "./CommentInput.jsx";
import CommentContainerList from "./CommentContainer.jsx";
import useComments from "../../../../hooks/useComments.jsx";

export default function Comments() {

    const { user } = useAuth();

    const { comments, addComment } = useComments();

    return (

        <Container>

            {user.id && <ComponentInputComponent addComment={addComment} />}

            <Header >
                <h1>Comments</h1>
                <Link to={-1}><ExitButton src="/imgs/svg/close.svg" /></Link>
            </Header>

            <CommentContainerList comments={comments} user={user} />

        </Container>
    )
}


