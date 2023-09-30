import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginPage from "./LoginView"

import { MemoryRouter } from 'react-router-dom'
import AuthProvider from "../../../contexts/auth";

describe('Login Page Test', () => {


    test('Chekc if renders login page', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );
        const linkElement = screen.getAllByText('Login', { selector: 'h2' });
        expect(linkElement[0]).toBeInTheDocument();
    })


    test('Testing login with email and password', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );
        act(() => {
            const emailInpuit = screen.getByLabelText('Email:');
            const passwordInpuit = screen.getByLabelText('Password:');

            userEvent.type(emailInpuit, 'pesho@abv.bg');
            userEvent.type(passwordInpuit, '123456');

            const submitButton = screen.getByText('Login', { selector: 'button' });

            expect(emailInpuit).toHaveValue('pesho@abv.bg');
            expect(passwordInpuit).toHaveValue('123456');

            userEvent.click(submitButton);
        })

    })
})
