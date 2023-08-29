import { RegisterStyle } from "../../../styles/ViewsStyles/RegisterStyle/Register.style";

export default function RegisterView() {


    return (
        <RegisterStyle>
            <h2>Register</h2>
            <form action="#" method="post">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required=""
                />
                <button type="submit">Register</button>
            </form>
        </RegisterStyle>

    )
}