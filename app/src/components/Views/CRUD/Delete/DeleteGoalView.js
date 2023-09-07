import { useNavigate, useParams } from "react-router-dom";
import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { useEffect, useState } from "react";
import { deleteGoal, getDetails } from "../../../../api/goalsApi";

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
        <FormContainerStyle>
            <h2>Delete goal</h2>

            <form onSubmit={onSubmitHandler} action="#" method="post">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" disabled defaultValue={post.title} />

                <label htmlFor="image">ImageUrl:</label>
                <input type="text" id="image" name="image" disabled defaultValue={post.image} />

                <label htmlFor="goal">Goal Description:</label>
                <textarea type="text" id="goal" name="description" disabled defaultValue={post.description} />

                <button type="submit">Delete</button>
            </form>

        </FormContainerStyle>
    )
}