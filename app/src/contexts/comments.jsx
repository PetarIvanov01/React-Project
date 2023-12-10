import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import useComments from '../hooks/useComments';

const CommentsContex = createContext();

export default function CommentProvider({ children }) {

    const { comments, loading, addComment } = useComments();
    const commentsLength = comments.length;

    const [reply, setReply] = useState({
        name: '',
        isReply: false,
        parentId: null
    });

    const onClickSetReplyForm = useCallback(({ parentId, name }) => {
        setReply((state) => ({ ...state, isReply: true, parentId, name }))
    }, []);

    const onClickResetForm = useCallback(() => {
        setReply({ isReply: false, parentId: null, name: '' });
    }, []);


    const store = useMemo(() => {
        return {
            comments,
            loading,
            addComment,
            commentsLength,
            onClickResetForm,
            onClickSetReplyForm,
            reply,
            isReplyOnParrent: reply.parentId
        }
    }, [comments,
        loading,
        addComment,
        commentsLength,
        onClickResetForm,
        onClickSetReplyForm,
        reply,
        reply.parentId
    ]);

    return (
        <CommentsContex.Provider value={store}>

            {children}
        </CommentsContex.Provider>
    )
}

export const useCommentsContext = () => {
    const context = useContext(CommentsContex)

    return context;
}