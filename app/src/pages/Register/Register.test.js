import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { MemoryRouter } from 'react-router-dom'
import AuthProvider from "../../../contexts/auth";
import RegisterView from "./RegisterView";


describe('Register Page Test', () => {

    test('Chekc if renders Register page', () => {
        render(
            <MemoryRouter >
                <AuthProvider>
                    <RegisterView />
                </AuthProvider>
            </MemoryRouter>
        );
        const registerBtn = screen.getByRole('button');
        expect(registerBtn).toBeInTheDocument();
    })

    test('Inputs should be empty', () => {
        render(
            <MemoryRouter >
                <AuthProvider>
                    <RegisterView />
                </AuthProvider>
            </MemoryRouter>
        )
        const emailInpuit = screen.getByLabelText('Email:');
        const passwordInpuit = screen.getByLabelText('Password:');
        const rePasswordInpuit = screen.getByLabelText('Confirm Password:');

        expect(emailInpuit.value).toBe('')
        expect(passwordInpuit.value).toBe('')
        expect(rePasswordInpuit.value).toBe('')
    })

    test('Testing Register with email and password', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <RegisterView />
                </AuthProvider>
            </MemoryRouter>
        );
        const emailInpuit = screen.getByLabelText('Email:');
        const passwordInpuit = screen.getByLabelText('Password:');
        const rePasswordInpuit = screen.getByLabelText('Confirm Password:');

        act(() => {
            userEvent.type(emailInpuit, 'Test@m.bg');
            userEvent.type(passwordInpuit, '123456');
            userEvent.type(rePasswordInpuit, '123456');

        })
        expect(emailInpuit).toHaveValue('Test@m.bg');
        expect(passwordInpuit).toHaveValue('123456');
        expect(rePasswordInpuit).toHaveValue('123456');
    })

    test('Test for all fields are required', async () => {

        render(
            <MemoryRouter>
                <AuthProvider>
                    <RegisterView />
                </AuthProvider>
            </MemoryRouter>
        );
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');
        const rePasswordInput = screen.getByLabelText('Confirm Password:');

        const registerButton = screen.getByRole('button', { name: 'Register' });

        emailInput.value = '';
        passwordInput.value = '';
        rePasswordInput.value = '';

        let error;

        await act(async () => {
            userEvent.click(registerButton);
        })
        error = await screen.findByRole('heading', { level: 3 });
        expect(error.textContent).toBe('All fields are required!');
    })

    test('Test for passwords and confirm password don\'t match', async () => {

        render(
            <MemoryRouter>
                <AuthProvider>
                    <RegisterView />
                </AuthProvider>
            </MemoryRouter >
        )
        
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');
        const rePasswordInput = screen.getByLabelText('Confirm Password:');
        
        const registerButton = screen.getByRole('button', { name: 'Register' });

        let error;

        await act(async () => {
            userEvent.type(emailInput, 'incorect@abv.bg');
            userEvent.type(passwordInput, 'incorect');
            userEvent.type(rePasswordInput,'incorect2');

            userEvent.click(registerButton);
        })

        error = await screen.findByRole('heading', { level: 3 });
        expect(error.textContent).toBe('Passwords do not match!');
    })

})
