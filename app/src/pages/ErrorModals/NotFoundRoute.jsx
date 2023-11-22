import { Container, Heading, Message, StyledLink } from "../../styles/ViewsStyles/ErrorModals/ErrorStyles";

export default function NotFound() {


    return (
        <Container>
            <Heading>404 - Not Found</Heading>
            <Message>
            We're sorry, but the page you are looking for could not be found.

            </Message>
            <Message>
                Don't worry, you can always{" "}
                <StyledLink to="/">go back home</StyledLink>.
            </Message>
            
        </Container>
    )
}