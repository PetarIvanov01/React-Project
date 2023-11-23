import { Link } from "react-router-dom";
import { useState } from "react";

import useAuthForm from "../../hooks/authForm";

import { AuthForm, ProfileActionMessage } from "../../styles/AuthForm.styled";
import { ButtonStyle, InputField } from "../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { AuthErrorBox } from "../../styles/ViewsStyles/ErrorBoxs.style";

export default function RegisterView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        err: ''
    });

    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);

    return (
        <AuthForm>
            <h2>Register</h2>
            {fields.err ? <AuthErrorBox> <p>{fields.err}</p> </AuthErrorBox> : ''}

            <form onSubmit={(e) => onSubmitHandler(e, true)}>
                <InputField>
                    <input type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        minLength={5}
                        placeholder="Email..."
                        required={true}
                        onChange={onChangeHandler}
                        value={fields.email} />
                </InputField>

                <InputField>
                    <input type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        minLength={5}
                        placeholder="Password..."
                        required={true}
                        onChange={onChangeHandler}
                        value={fields.password} />
                </InputField>

                <InputField>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="off"
                        minLength={5}
                        placeholder="Confirm your password..."
                        required={true}
                        onChange={onChangeHandler}
                        value={fields.confirmPassword}
                    />
                </InputField>

                <ButtonStyle>
                    <button type="submit">Register</button>
                </ButtonStyle>
            </form>
            <ProfileActionMessage>
                <p>Already have a profile? <Link to={'/login'}>Sign In</Link>.</p>
            </ProfileActionMessage>
        </AuthForm>

    )
}

