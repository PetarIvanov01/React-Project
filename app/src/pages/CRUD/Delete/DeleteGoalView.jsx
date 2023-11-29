import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useErrorBoundryAsync from "../../../hooks/useErrorBoundryAsync";

import { deleteGoal, getDetails } from "../../../api/services/goalsApi";
import { DeleteFormStyle } from "../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { ButtonStyle, InputField, TextArea } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { useAuth } from "../../../contexts/auth";

export default function DeleteGoalView() {

    const throwToErrBoundry = useErrorBoundryAsync()

    const { user } = useAuth();
    const { goalId } = useParams()
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        getDetails(goalId)
            .then(({ items }) => setPost(items))
            .catch(throwToErrBoundry);

    }, [goalId, throwToErrBoundry])


    const onSubmitHandler = (e) => {
        e.preventDefault();

        deleteGoal(goalId)
            .then(e => navigate(`/profile/${user.id}`))
            .catch(throwToErrBoundry);
    }

    return (
        <DeleteFormStyle>
            <h2>Are you sure about this decision?</h2>

            <form onSubmit={onSubmitHandler}>

                <InputField >
                    <input type="text" id="title" name="title" disabled defaultValue={post.title} />
                </InputField>

                <InputField>
                    <input type="text" id="image" name="image" disabled defaultValue={post.image} />
                </InputField>

                <TextArea >
                    <textarea type="text" id="goal" name="description" disabled defaultValue={post.description} />
                </TextArea>

                <ButtonStyle className="button-container">
                    <button type="submit">Delete</button>
                </ButtonStyle>
            </form>

        </DeleteFormStyle>
    )
}