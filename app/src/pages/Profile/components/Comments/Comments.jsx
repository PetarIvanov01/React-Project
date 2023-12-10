import { useAuth } from "../../../../contexts/auth.jsx";
import { useCommentsContext } from "../../../../contexts/comments.jsx";

import ComponentInputComponent from "./CommentInput.jsx";
import CommentContainerList from "./CommentContainer.jsx";

import { NoCommentsMessage, NoUserMessage, RegisterLink } from "../../../../styles/ViewsStyles/FeaturesStyle/Comments/NoComments.style.js";
import { Container } from "../../../../styles/ViewsStyles/FeaturesStyle/Comments/Container.style.js";
import { SpinnerStyle } from "../../../../components/SuspenseSpinner.jsx";

export default function Comments() {

    const { user } = useAuth();
    const { commentsLength, loading } = useCommentsContext()

    return (
        <Container>

            {user.id ? (
                <ComponentInputComponent />
            ) : (
                <NoUserMessage>
                    Join our community!{" "}
                    <RegisterLink to="/register">Create an account</RegisterLink> to start commenting.
                </NoUserMessage>
            )}

            {loading ?
                <SpinnerStyle />
                :
                (
                    commentsLength === 0 ? (
                        <NoCommentsMessage>No comments yet! Add one :)</NoCommentsMessage>
                    )
                        :
                        <CommentContainerList user={user} />
                )}

        </Container>
    )
};

