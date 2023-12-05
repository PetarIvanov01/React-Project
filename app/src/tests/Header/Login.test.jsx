import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event"

import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import AuthProvider from '../../contexts/auth';
import LoginView from '../../pages/Login/LoginView';

/* eslint-disable testing-library/no-debugging-utils */

const setupComponent = () => {
    render(
        <MemoryRouter >
            <AuthProvider>
                <LoginView />
            </AuthProvider>
        </MemoryRouter>
    );
};

describe('Login Page Test', () => {

    beforeEach(() => {
        setupComponent();
    });

    it('Inputs should be empty', () => {
        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');

        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
    })

    it('Testing Login with email and password is it have the right value', async () => {
        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');

        await user.type(emailInput, 'Test@gmail.com');
        await user.type(passwordInput, 'p123456');

        expect(emailInput).toHaveValue('Test@gmail.com');
        expect(passwordInput).toHaveValue('p123456');
    })

    it('Displays error for incomplete login form submission', async () => {

        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');

        const loginButton = screen.getByRole('button', { name: 'Login' });

        await user.type(emailInput, 'incorect@abv.bg');
        await user.type(passwordInput, 'corect');

        await user.click(loginButton);

        let error = await screen.findByText(/Incorrect/i);
        expect(error).toBeVisible()
    })
})