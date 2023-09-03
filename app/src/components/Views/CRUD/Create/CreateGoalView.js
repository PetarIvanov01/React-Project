import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CreateContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/Create.style";
import { createGoal } from "../../../../api/goalsApi";

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

            await createGoal(goal);

            //Todo navigate to the person profile
            navigate('/')

        } catch (error) {
            alert(error.message);
            return
        }
    }

    return (

        <CreateContainerStyle>
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

        </CreateContainerStyle>

    )

};
