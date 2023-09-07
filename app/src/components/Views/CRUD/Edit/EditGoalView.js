import { FormContainerStyle } from "../../../../styles/ViewsStyles/CRUDStyle/FormCrud.style"

//TODO Fetch the data and fill the fields
export default function EditGoalView() {


    return (

        <FormContainerStyle>
            <h2>Edit goal</h2>

            <form action="#" method="post">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required="" />

                <label htmlFor="image">ImageUrl:</label>
                <input type="url" id="image" name="image" required="" />
                
                <label htmlFor="goal">Goal Description:</label>
                <textarea type="text" id="goal" name="goal" required="" />

                <button type="submit">Edit</button>
            </form>

        </FormContainerStyle>

    )

};
