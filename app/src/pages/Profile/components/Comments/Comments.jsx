import { CommentInput, CommentSubmitButton, CommentItem, CommentsList, CommentAvatar, CommentBox, CommentContainer, CommentContent, CommentHead, CommentMainLevel, CommentName, ExitButton, Header, CommentInputContainer, Container, CommentTimeStatus } from "../../../../styles/ViewsStyles/ProfileStyle/Comments.style";

import { avatars } from '../../../../util/_mockAvatars.js'
import { Link, useParams } from "react-router-dom";


const sampleComments = [
    {
        id: 1,
        avatar: avatars[0].value,
        author: 'Kiro Breika',
        time: '20 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 2,
        avatar: avatars[1].value,
        author: 'Minko Lajnata',
        time: '15 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 3,
        avatar: avatars[2].value,
        author: 'Stoyan Kukov',
        time: '12 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 4,
        avatar: avatars[3].value,
        author: 'Pesho Ribata',
        time: '7 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    }, {
        id: 5,
        avatar: avatars[0].value,
        author: 'Kiro Breika',
        time: '20 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 6,
        avatar: avatars[1].value,
        author: 'Minko Lajnata',
        time: '15 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 7,
        avatar: avatars[2].value,
        author: 'Stoyan Kukov',
        time: '12 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 8,
        avatar: avatars[3].value,
        author: 'Pesho Ribata',
        time: '7 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
];

export default function Comments() {

    const { postId } = useParams();



    return (

        <Container>
            <CommentInputContainer>
                <h1>Write</h1>
                <CommentInput
                    // value={newComment}
                    // onChange={handleCommentChange}
                    placeholder="Type your comment here..."
                />
                <CommentSubmitButton >
                    Submit
                </CommentSubmitButton>
            </CommentInputContainer>
            <Header >
                <h1>Comments</h1>
                <Link to={-1}><ExitButton src="/imgs/svg/close.svg" /></Link>
            </Header>
            <CommentContainer>
                <CommentsList >
                    {sampleComments.map((comment, index) => (
                        <Comment key={comment.id}
                            comment={comment}
                            isAuthor={(index % 2 === 0).toString()}
                            isReply={(index > 0 && index % 2 !== 0).toString()} />
                    ))}
                </CommentsList>
            </CommentContainer>
        </Container>
    )
}

const Comment = ({ comment, isAuthor, isReply }) => (
    <CommentItem>
        <CommentMainLevel>
            <CommentAvatar $isreply={isReply}>
                <img src={comment.avatar} alt="" />
            </CommentAvatar>
            <CommentBox $isreply={isReply}>
                <CommentHead $isreply={isReply}>
                    <CommentName $isauthor={isAuthor}>
                        <span>{comment.author}</span>
                    </CommentName>
                    <CommentTimeStatus>
                        <span>{comment.time}</span>
                        <img src='/imgs/Icons/notLiked.png' className="heart" />
                    </CommentTimeStatus>
                </CommentHead>
                <CommentContent $isreply={isReply}>{comment.content}</CommentContent>
            </CommentBox>
        </CommentMainLevel>
    </CommentItem>
);
