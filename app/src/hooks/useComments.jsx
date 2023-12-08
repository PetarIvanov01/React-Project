import { useParams } from "react-router-dom";
import useErrorBoundryAsync from "./useErrorBoundryAsync";
import { useCallback, useEffect, useState } from "react";
import { getComments, postComment } from "../api/services/goalsApi";
import { useAuth } from "../contexts/auth";

export default function useComments() {

    const throwToErrBoundry = useErrorBoundryAsync();
    const { user } = useAuth();
    const { postId } = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {

        getComments(postId)
            .then(setComments)
            .catch(throwToErrBoundry)

    }, [throwToErrBoundry, postId]);

    const createComment = useCallback(async (comment) => {

        const payload = {
            message: comment,
            userId: user.id,
            parentId: null
        }
        const created = await postComment(postId, payload);
        setComments((state) => [...state, created.comment])

    }, [user.id, postId]);

    return {
        comments,
        addComment: createComment
    }
}