import { Link } from 'react-router-dom';
import { Container, CreateButton, Message } from '../../../../styles/ViewsStyles/ProfileStyle/NoTopics.style'

export default function NoTopics({
  owner,
}) {

  return (
    <Container>
      {owner ? (
        <>
          <Message>Oopsie daisy! No posts yet?</Message>
          <CreateButton>
            <Link to={'/create'}>Let's get the creativity flowing!</Link>
          </CreateButton>
        </>
      ) : (
        <Message>
          This profile doesn't have any posts yet.
        </Message>
      )}
    </Container>
  );
}

