import { render, screen } from '@testing-library/react';
import user from "@testing-library/user-event"

import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

/* eslint-disable testing-library/no-debugging-utils */

describe('Testing the App component(Header, Main, Footer)', () => {

    const Component = () => (
        <MemoryRouter>
            <App />
        </MemoryRouter >
    )

    describe('Testing Header Component', () => {

        it('Rendering the Browse button', () => {
            render(<Component />);

            const header = screen.getByText('Browse');
            expect(header).toBeVisible();
        });

        it('Rendering the Logo Icon button', () => {
            render(<Component />);

            const logo = screen.getByAltText('logo');
            expect(logo).toBeVisible();
        });

        it('Rendering Login View', async () => {

            render(<Component />);
            const loginButton = screen.getByText('Sign In');

            await user.click(loginButton);

            const loginView = await screen.findByRole('heading', { level: 2, name: 'Login' });
            expect(loginView).toBeVisible();
        });

        it('Rendering Register View', async () => {

            render(<Component />);
            const registerButton = screen.getByText('Sign Up');

            await user.click(registerButton);

            const registerView = await screen.findByRole('heading', { level: 2, name: 'Register' });
            expect(registerView).toBeVisible();
        });

    })

});