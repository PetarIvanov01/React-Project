import { useParams } from "react-router-dom";
import useErrorBoundryAsync from "./useErrorBoundryAsync";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";

import { getComments, postComment } from "../api/services/goalsApi";

export default function useComments() {

    const throwToErrBoundry = useErrorBoundryAsync();
    const { user } = useAuth();
    const { postId } = useParams();
    const [loading, setLoading] = useState(false);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);

        getComments(postId)
            .then((data) => {
                if (isMounted) {
                    setComments(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setLoading(false);
                    throwToErrBoundry(err);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [throwToErrBoundry, postId]);

    const createComment = useCallback(async (data) => {

        const payload = {
            message: data.comment,
            userId: user.id,
            parentId: data.parentId || null
        }

        const { comment } = await postComment(postId, payload);

        setComments((state) => {

            if (comment.depth === 1) {
                return [...state, comment];
            }

            else if (comment.depth === 2) {
                const updatedState = state.map((c) => {
                    if (c._id === comment.parent) {

                        return { ...c, children: [comment, ...(c.children || [])] };
                    } else if (c.children) {

                        return { ...c, children: c.children.map((child) => child._id === comment.parent ? { ...child, children: [comment, ...(child.children || [])] } : child) };
                    }
                    return c;
                });
                return updatedState;
            }
            else if (comment.depth === 3) {

                const updatedState = state.map((c) => {

                    if (c.children) {
                        return {
                            ...c,
                            children: c.children.map((child) => {
                                if (child._id === comment.parent) {

                                    return { ...child, children: [comment, ...(child.children || [])] };
                                } else if (child.children) {
                                    return { ...child, children: child.children.map((grandchild) => grandchild._id === comment.parent ? { ...grandchild, children: [comment, ...(grandchild.children || [])] } : grandchild) };
                                }
                                return child;
                            }),
                        };
                    }
                    return c;
                });
                return updatedState;
            }

            return state;
        });

    }, [user.id, postId]);

    return {
        comments,
        addComment: createComment,
        loading
    }
}
