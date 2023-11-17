import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { editGoal, getDetails } from "../../../../api/services/goalsApi";
import { EditFormStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { ButtonStyle, InputField, TextArea } from "../../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";

export default function EditGoalView() {

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
            .catch(err => console.log(err));

        return () => {
            isMounted = false;
        };

    }, [goalId])

    function onChangeHandler(e) {
        setPost((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        editGoal(goalId, post)
            .then(({ item }) => navigate(`/profile/${item.owner}`))
            .catch(err => console.log(err.message));

    }

    return (

        <EditFormStyle>
            <h2>Refine Your Journey: Edit Your Goal</h2>

            <form onSubmit={onSubmitHandler} action="#" method="post">
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
