import {
    CommentsList,
    CommentContainer,
    CommentItem,
    CommentAvatar,
    CommentBox,
    CommentContent,
    CommentHead,
    CommentMainLevel,
    CommentName,
    CommentTimeStatus
} from "../../../../styles/ViewsStyles/ProfileStyle/Comments.style";
import { avatars } from '../../../../util/_mockAvatars.js'
import transformDate from "../../../../util/transformDate.js";

const sampleComments = [
    {
        id: 1,
        avatar: avatars[0].value,
        author: 'petar',
        time: '20 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 2,
        avatar: avatars[1].value,
        author: 'stoyan',
        time: '15 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 3,
        avatar: avatars[2].value,
        author: 'emcho',
        time: '12 minutes ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?',
    },
    {
        id: 4,
        avatar: avatars[3].value,
        author: 'dani',
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

export default function CommentContainerList({ comments, user }) {

    function RecursiveChildren(comment) {

        if (Object.keys(comment).length === 0) {
            return;
        }

        // console.log(comment.ownerIdProfile?.username);
        // console.log(comment.depth > 1);
        return (
            <Test
                key={comment._id}
                comment={comment}
                RecursiveChildren={RecursiveChildren}
                isAuthor={(comment.ownerId === user?.id).toString()}
                isReply={(comment.depth > 1).toString()}
            />
        )

    }

    return (
        <CommentContainer>

            {/* {sampleComments.map((comment, index) => (
                    <Comment key={comment.id}
                        comment={comment}
                        isAuthor={(index % 2 === 0).toString()}
                        isReply={(index > 0 && index % 2 !== 0).toString()} />
                ))} */}
            {comments.map(RecursiveChildren)}


        </CommentContainer>
    )
}

const Test = ({ comment, RecursiveChildren, isAuthor, isReply }) => (
    <CommentsList >
        <CommentItem>

            <CommentMainLevel>

                <CommentAvatar $isreply={isReply}>
                    <img src={comment.ownerIdProfile?.avatarImg.value} alt={comment.ownerIdProfile?.avatarImg.label} />
                </CommentAvatar>

                <CommentBox $isreply={isReply}>

                    <CommentHead $isreply={isReply}>

                        <CommentName $isauthor={isAuthor}>
                            <span>{comment.ownerIdProfile?.username}</span>
                        </CommentName>

                        <CommentTimeStatus>
                            <span>{transformDate(comment.createdAt)}</span>
                            <img src='/imgs/Icons/notLiked.png' className="heart" alt="notLiked" />
                        </CommentTimeStatus>

                    </CommentHead>

                    <CommentContent $isreply={isReply}>{comment.message}</CommentContent>

                    {comment.children.map(RecursiveChildren)}
                </CommentBox>

            </CommentMainLevel>

        </CommentItem>
    </CommentsList>

)

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
                        <img src='/imgs/Icons/notLiked.png' className="heart" alt="notLiked" />
                    </CommentTimeStatus>
                </CommentHead>
                <CommentContent $isreply={isReply}>{comment.content}</CommentContent>
            </CommentBox>
        </CommentMainLevel>
    </CommentItem>
);