import { useState } from "react";
import useAuthForm from "../../../hooks/authForm";
import { RegisterStyle } from "../../../styles/ViewsStyles/RegisterStyle/Register.style";

export default function RegisterView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        err: ''
    });


    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);


    return (
        <RegisterStyle>
            <h2>Register</h2>
            {fields.err ? <h3>{fields.err}</h3> : ''}
            <br />
            <form onSubmit={(e) => onSubmitHandler(e, true)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" onChange={onChangeHandler} value={fields.email} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" onChange={onChangeHandler} value={fields.password} />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required=""
                    onChange={onChangeHandler}
                    value={fields.confirmPassword}
                />
                <button type="submit">Register</button>
            </form>
        </RegisterStyle>

    )
}