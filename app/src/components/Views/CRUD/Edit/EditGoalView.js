import { useNavigate, useParams } from "react-router-dom";
import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style"
import { useEffect, useState } from "react";

import { editGoal, getDetails } from "../../../../api/services/goalsApi";

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

        <FormContainerStyle>
            <h2>Edit goal</h2>

            <form onSubmit={onSubmitHandler} action="#" method="post">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required="" onChange={onChangeHandler} value={post.title} />

                <label htmlFor="image">ImageUrl:</label>
                <input type="text" id="image" name="image" required="" onChange={onChangeHandler} value={post.image} />

                <label htmlFor="goal">Goal Description:</label>
                <textarea type="text" id="goal" name="description" required="" onChange={onChangeHandler} value={post.description} />

                <button type="submit">Edit</button>
            </form>

        </FormContainerStyle>

    )

};
