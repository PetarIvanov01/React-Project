import { useState } from "react";
import { RegisterStyle } from "../../../styles/ViewsStyles/RegisterStyle/Register.style";
import { register } from "../../../api/goalsApi";

export default function RegisterView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        err: ''
    });

    async function onSubmitHandler(e) {
        e.preventDefault();
        try {

            if (Object.entries(fields).some(([k, v]) => (v === '' && k !== 'err'))) {
                throw new Error('All fields are required!');
            }
            if (fields.password !== fields.confirmPassword) {
                throw new Error('Password are not the same!');
            }

            await register(fields.email, fields.password)

        } catch (error) {
            setFields((state) => ({ ...state, err: error.message }))
            console.error(error);
        }
    }

    function onChangeHandler(e) {
        setFields((state) => ({ ...state, [e.target.name]: e.target.value, err: '' }))
    }

    return (
        <RegisterStyle>
            <h2>Register</h2>
            {fields.err ? <h3>{fields.err}</h3> : ''}
            <br />
            <form onSubmit={onSubmitHandler}>
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