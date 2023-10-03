import { screen, render, logRoles } from "@testing-library/react"
import CatalogView from "./Catalog"


describe('Testing Catalog Page', () => {

    test('Correctly rendering search bar', () => {
        render(
            <CatalogView />
        )

        const searchElement = screen.getByPlaceholderText(/Search by name/i);
        expect(searchElement).toBeInTheDocument();

    })
    
})