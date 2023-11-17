import { useState } from "react";
import useAuthForm from "../../../hooks/authForm";
import { RegisterFormStyle } from "./Register.style"
import { ButtonStyle, InputField } from "../../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { AuthErrorBox } from "../../../styles/ViewsStyles/ErrorBoxs.style";
export default function RegisterView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        err: ''
    });


    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);

    return (
        <RegisterFormStyle>
            <h2>Register</h2>
            {fields.err ? <AuthErrorBox> <p>{fields.err}</p> </AuthErrorBox> : ''}

            <form onSubmit={(e) => onSubmitHandler(e, true)}>
                <InputField>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email..."
                        required=""
                        onChange={onChangeHandler}
                        value={fields.email} />
                </InputField>

                <InputField>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="Password..."
                        required=""
                        onChange={onChangeHandler}
                        value={fields.password} />
                </InputField>

                <InputField>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password..."
                        required=""
                        onChange={onChangeHandler}
                        value={fields.confirmPassword}
                    />
                </InputField>

                <ButtonStyle>
                    <button type="submit">Register</button>
                </ButtonStyle>
            </form>
        </RegisterFormStyle>

    )
}

