import { Heading, Message, ResetButton } from "../../styles/ViewsStyles/ErrorModals/ErrorStyles"

export default function SessionExpired(props) {

    const { resetAuthErrorState } = props

    return (
        <>
            <Heading>Expired Session!</Heading>
            <Message>Your session has expired. Please log in again.</Message>
            <ResetButton onClick={resetAuthErrorState}>Sign In again!</ResetButton>
        </>
    )
};