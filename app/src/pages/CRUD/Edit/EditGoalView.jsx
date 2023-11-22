import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useError from "../../../hooks/useError";
import useErrorBoundryAsync from "../../../hooks/useErrorBoundryAsync";

import { editGoal, getDetails } from "../../../api/services/goalsApi";
import { EditFormStyle } from "../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { ButtonStyle, InputField, TextArea } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { CreateGoalErrorBox } from "../../../styles/ViewsStyles/ErrorBoxs.style";
import validateDataCreate from "../../../validations/validateDataForCreate";

export default function EditGoalView() {

    const throwToErrBoundry = useErrorBoundryAsync()

    const { errors, setErrorData } = useError();

    const { goalId } = useParams();
    const [post, setPost] = useState({
        title: '',
        image: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        getDetails(goalId)
            .then(({ items }) => {
                if (isMounted) {
                    setPost(items);
                }
            })
            .catch(throwToErrBoundry);

        return () => {
            isMounted = false;
        };

    }, [goalId])

    function onChangeHandler(e) {
        setPost((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        try {

            const errors = validateDataCreate(post);

            if (errors.length) throw errors

            const { item } = await editGoal(goalId, post);

            navigate(`/profile/${item.owner}`)

        } catch (error) {
            if (error.message === 'Not Authorized' || error.type === 'TokenExpiredError') {
                throwToErrBoundry(error);
            }
            setErrorData(error);
        }

    }

    return (

        <EditFormStyle>
            {errors &&
                <CreateGoalErrorBox>
                    {errors.map((e, i) => <p key={i}>{e.message}</p>)}
                </CreateGoalErrorBox>
            }
            <h2>Refine Your Journey: Edit Your Goal</h2>

            <form onSubmit={onSubmitHandler}>
                <InputField >
                    <input type="text" id="title" name="title" placeholder="Your title" required="" onChange={onChangeHandler} value={post.title} />
                </InputField>
                <InputField >
                    <input type="text" id="image" name="image" placeholder="ImageUrl" required="" onChange={onChangeHandler} value={post.image} />
                </InputField>
                <TextArea>
                    <textarea type="text" id="goal" name="description" placeholder="Goal Description" required="" onChange={onChangeHandler} value={post.description} />
                </TextArea>

                <ButtonStyle>
                    <button type="submit">Edit</button>
                </ButtonStyle>

            </form>

        </EditFormStyle>

    )

};
