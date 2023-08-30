import { CreateContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/Create.style";

export default function CreateGoalView() {


    return (

        <CreateContainerStyle>
            <h2>Create goal</h2>

            <form action="#" method="post">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required="" />

                <label htmlFor="image">ImageUrl:</label>
                <input type="url" id="image" name="image" required="" />
                
                <label htmlFor="goal">Goal Description:</label>
                <textarea type="text" id="goal" name="goal" required="" />

                <button type="submit">Create</button>
            </form>

        </CreateContainerStyle>

    )

};
