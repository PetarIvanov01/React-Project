import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style";
import { createGoal } from "../../../../api/services/goalsApi";

export default function CreateGoalView() {

    const [goal, setGoalData] = useState({
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
            
            const { item } = await createGoal(goal);
            navigate(`/profile/${item.owner}`)

        } catch (error) {
            alert(error.message);
            return
        }
    }

    return (

        <FormContainerStyle>
            <h2>Create goal</h2>

            <form onSubmit={onSubmitHandler} action="#" method="post">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={onChangeHandler} required="" value={goal.title} />

                <label htmlFor="image">ImageUrl:</label>
                <input type="text" id="image" name="image" onChange={onChangeHandler} required="" value={goal.image} />

                <label htmlFor="goal">Goal Description:</label>
                <textarea type="text" id="goal" name="description" onChange={onChangeHandler} required="" value={goal.goal} />

                <button type="submit">Create</button>
            </form>

        </FormContainerStyle>

    )

};
