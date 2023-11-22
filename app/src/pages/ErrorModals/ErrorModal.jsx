import { useNavigate } from "react-router-dom";
import SessionExpired from "./ExpiredSession";
import { useAuth } from "../../contexts/auth";
import { Container, Heading,Message,ResetButton } from "../../styles/ViewsStyles/ErrorModals/ErrorStyles";
import ServerError from "./ServerError";
import NotAuthorized from "./NotAuthorized";

export default function ErrorModalComponent(props) {

    const { error, resetErrorBoundary } = props;
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const resetAuthErrorState = () => {
        setUser(null);
        navigate('/login', { replace: true });
        resetErrorBoundary();
    };

    const errorComponents = {
        TokenExpiredError: <SessionExpired error={error} resetAuthErrorState={resetAuthErrorState} />,
        ServerError: <ServerError error={error} resetErrorBoundary={resetErrorBoundary} />,
        NotAuthorized: <NotAuthorized error={error} resetAuthErrorState={resetAuthErrorState} />
    };

    return (
        <Container>
            {errorComponents[error.type] || (
                <>
                    <Heading>Unexpected Error</Heading>
                    <Message>{error.message}</Message>
                    <ResetButton onClick={resetAuthErrorState}>Click to reset the App!</ResetButton>
                </>
            )}
        </Container>
    );
}

