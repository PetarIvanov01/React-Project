import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createGoal } from "../../../api/services/goalsApi";
import { CreateFormStyle } from "../../../styles/ViewsStyles/CRUDStyle/CreateForm.style";
import { ButtonStyle, InputField, TextArea } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import validateDataCreate from "../../../validations/validateDataForCreate";
import { CreateGoalErrorBox } from "../../../styles/ViewsStyles/ErrorBoxs.style";
import useError from "../../../hooks/useError";

export default function CreateGoalView() {

    const { errors, setErrorData } = useError();

    const [post, setGoalData] = useState({
        title: '',
        image: '',
        description: ''
    })

    const navigate = useNavigate();

    function onChangeHandler(e) {
        setGoalData((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            const errors = validateDataCreate(post);

            if (errors.length) throw errors

            const { item } = await createGoal(post);
            navigate(`/profile/${item.owner}`)

        } catch (errors) {
            setErrorData(errors);
        }
    }

    return (

        <CreateFormStyle>
            {errors &&
                <CreateGoalErrorBox>
                    {errors.map((e, i) => <p key={i}>{e.message}</p>)}
                </CreateGoalErrorBox>
            }
            <h2>Empower Your Ambitions: Create Your Next Goal</h2>

            <form onSubmit={onSubmitHandler}>

                <InputField>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={onChangeHandler}
                        placeholder="Your title"
                        required=""
                        value={post.title} />
                </InputField>
                <InputField>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        onChange={onChangeHandler}
                        placeholder="ImageUrl"
                        required=""
                        value={post.image} />
                </InputField>
                <TextArea>
                    <textarea
                        type="text"
                        id="goal"
                        name="description"
                        onChange={onChangeHandler}
                        placeholder="Goal Description"
                        required=""
                        value={post.description} />
                </TextArea>
                <ButtonStyle>
                    <button type="submit">Create</button>
                </ButtonStyle>
            </form>

        </CreateFormStyle>
    )

};
