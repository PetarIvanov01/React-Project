import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { deleteGoal, getDetails } from "../../../../api/services/goalsApi";
import { DeleteFormStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { ButtonStyle, InputField, TextArea } from "../../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";

export default function DeleteGoalView() {

    const { goalId } = useParams()
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        getDetails(goalId)
            .then(({ items }) => setPost(items))
            .catch(err => console.log(err))

    }, [goalId])


    const onSubmitHandler = (e) => {
        e.preventDefault();

        deleteGoal(goalId)
            .then(e => navigate('/goals'));

    }

    return (
        <DeleteFormStyle>
            <h2>Are you sure about this decision?</h2>

            <form onSubmit={onSubmitHandler} action="#" method="post">

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