import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event"

import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import AuthProvider from '../../contexts/auth';
import RegisterView from '../../pages/Register/RegisterView';

/* eslint-disable testing-library/no-debugging-utils */

const setupComponent = () => {
    render(
        <MemoryRouter >
            <AuthProvider>
                <RegisterView />
            </AuthProvider>
        </MemoryRouter>
    );
};

describe('Register Page Test', () => {

    beforeEach(() => {
        setupComponent();
    });

    it('Inputs should be empty', () => {
        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
        expect(confirmPasswordInput.value).toBe('');
    })

    it('Testing Register with email and password', async () => {
        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        await user.type(emailInput, 'Test@gmail.com');
        await user.type(passwordInput, 'p123456');
        await user.type(confirmPasswordInput, 'p123456');

        expect(emailInput).toHaveValue('Test@gmail.com');
        expect(passwordInput).toHaveValue('p123456');
        expect(confirmPasswordInput).toHaveValue('p123456');
    })

    it('Displays error for incomplete registration form submission(Email not correct)', async () => {

        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        const registerButton = screen.getByRole('button', { name: 'Register' });

        await user.type(emailInput, 'incorect@abv.bg');
        await user.type(passwordInput, 'corect');
        await user.type(confirmPasswordInput, 'corect');

        await user.click(registerButton);

        let error = await screen.findByText(/Please type a valid Email!/i);
        expect(error).toBeVisible()
    })

    it('Displays error for incomplete registration form submission(Password don\'t match!', async () => {

        const emailInput = screen.getByPlaceholderText('Email...');
        const passwordInput = screen.getByPlaceholderText('Password...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        const registerButton = screen.getByRole('button', { name: 'Register' });

        await user.type(emailInput, 'incorect@gmail.com');
        await user.type(passwordInput, 'incorect');
        await user.type(confirmPasswordInput, 'incorect1');

        await user.click(registerButton);

        let error = await screen.findByText(/Passwords don\'t match. /i);
        expect(error).toBeVisible()
    })

})