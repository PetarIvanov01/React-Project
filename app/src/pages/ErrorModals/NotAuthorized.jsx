import { Heading, Message, ResetButton } from "../../styles/ViewsStyles/ErrorModals/ErrorStyles"

export default function NotAuthorized(props) {

    const { resetAuthErrorState } = props;

    return (
        <>
            <Heading>Not Authorized!</Heading>
            <Message>You are not authorized to perform this action. Please make sure you have the necessary permissions or contact support for assistance.
            </Message>
            <ResetButton onClick={resetAuthErrorState}>Go back </ResetButton>
        </>
    )
};