import { Message, Heading, ResetButton } from "../../styles/ViewsStyles/ErrorModals/ErrorStyles"

export default function ServerError({ error, resetErrorBoundary }) {

    const resetErrorServerState = () => {
        resetErrorBoundary()
    }

    return (
        <>
            <Heading>
                Oops! Looks like the server is down.
            </Heading>
            <Message>{error.message}</Message>
            <ResetButton onClick={resetErrorServerState}>
                Try resetting after starting the server
            </ResetButton>
        </>
    )
}