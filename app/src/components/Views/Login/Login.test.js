import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/extend-expect';
import LoginPage from "./LoginView"

import { MemoryRouter } from 'react-router-dom'
import AuthProvider from "../../../contexts/auth";


test('renders login page link', () => {
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


test('Testig login with email and password', () => {
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

        const submitButton = screen.getByText('Login',{selector:'button'});
        userEvent.click(submitButton);

        expect(emailInpuit).toHaveValue('pesho@abv.bg');
        expect(passwordInpuit).toHaveValue('123456');
    })

})