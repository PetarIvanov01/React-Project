import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import App from "../../App"

describe('Testing navigation', () => {


    beforeEach(() => {
        window.history.pushState({}, '', '/');
    });

    test('Correctly rendering home page on rendering', () => {

        render(
            <App />,
            { wrapper: BrowserRouter }
        )

        expect(window.location.pathname).toBe('/')
    })

    test('Correctly rendering catalog page on click', () => {
        render(
            <App />,
            { wrapper: BrowserRouter }
        )

        const catalogButton = screen.getByRole('link', { name: 'Browse' })

        expect(catalogButton).toBeInTheDocument();

        act(() => {
            userEvent.click(catalogButton);
        })

        expect(window.location.pathname).toBe('/goals');
    })

    test('Correctly rendering login page on click', () => {

        render(
            <App />,
            { wrapper: BrowserRouter }
        )
        const loginButton = screen.getByRole('link', { name: 'Sign In' })

        expect(loginButton).toBeInTheDocument();

        act(() => {
            userEvent.click(loginButton);
        })

        expect(window.location.pathname).toBe('/login');

    })

    test('Correctly rendering register page on click', () => {

        render(
            <App />,
            { wrapper: BrowserRouter }
        )
        const registerButton = screen.getByRole('link', { name: 'Sign Up' })

        expect(registerButton).toBeInTheDocument();

        act(() => {
            userEvent.click(registerButton);
        })

        expect(window.location.pathname).toBe('/register');

    })

})
