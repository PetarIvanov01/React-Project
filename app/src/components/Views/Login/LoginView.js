import { LoginContainerStyle } from "../../../styles/ViewsStyles/LoginStyle/Login.style";

export default function LoginView() {


    return (
        <LoginContainerStyle>

            <h2>Login</h2>

            <form action="#" method="post">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit">Login</button>
            </form>

        </LoginContainerStyle>

    )
}