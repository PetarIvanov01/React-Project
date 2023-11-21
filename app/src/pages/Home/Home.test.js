import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import HomeView from "./HomeView"
import { MemoryRouter } from 'react-router-dom'

describe('Test for Home Page', () => {


    test('renders Home page', () => {
        render(
            <MemoryRouter>
                <HomeView />
            </MemoryRouter>
        );
        const titleElement = screen.getByText(/Share your goals/i);
        expect(titleElement).toBeInTheDocument();

        const secondTitleEl = screen.getByText(/Two of the most/i);
        expect(secondTitleEl).toBeInTheDocument();
    })

    
})