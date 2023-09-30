import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import HomeView from "./HomeView"
import { MemoryRouter } from 'react-router-dom'


test('renders login page link', () => {
    render(
        <MemoryRouter>
            <HomeView />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Share your goals/i);
    expect(linkElement).toBeInTheDocument();
})