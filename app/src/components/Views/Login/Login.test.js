import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginPage from "./LoginView"

import { MemoryRouter } from 'react-router-dom'
import AuthProvider from "../../../contexts/auth";


describe('Login Page Test', () => {

    test('Chekc if renders login page', () => {
        render(
            <MemoryRouter >
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );
        const loginBtn = screen.getByRole('button');
        expect(loginBtn).toBeInTheDocument();
    })

    test('Inputs should be empty', () => {
        render(
            <MemoryRouter >
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        )
        const emailInpuit = screen.getByLabelText('Email:');
        const passwordInpuit = screen.getByLabelText('Password:');

        expect(emailInpuit.value).toBe('')
        expect(passwordInpuit.value).toBe('')
    })

    test('Testing login with email and password', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );
        act(() => {
            const emailInpuit = screen.getByLabelText('Email:');
            const passwordInpuit = screen.getByLabelText('Password:');

            userEvent.type(emailInpuit, 'Test@m.bg');
            userEvent.type(passwordInpuit, '123456');

            expect(emailInpuit).toHaveValue('Test@m.bg');
            expect(passwordInpuit).toHaveValue('123456');
        })

    })

    test('Test for all fields are required', async () => {

        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        emailInput.value = '';
        passwordInput.value = ''

        let error;

        await act(async () => {
            userEvent.click(loginButton);
        })
        error = await screen.findByRole('heading', { level: 3 });
        expect(error.textContent).toBe('All fields are required!');
    })

    test('Test for incorrect username or password', async () => {

        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter >
        )
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        let error;

        await act(async () => {
            userEvent.type(emailInput, 'incorect@abv.bg');
            userEvent.type(passwordInput, 'incorect');
            userEvent.click(loginButton);
        })

        error = await screen.findByRole('heading', { level: 3 });
        expect(error.textContent).toBe('Incorrect username or password');
    })

})
