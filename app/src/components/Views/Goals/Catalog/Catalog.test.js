import { screen, render, } from "@testing-library/react"

describe('Testing Catalog Page', () => {

    test('Correctly rendering search bar', () => {
        render(
            <CatalogView />
        )

        const searchElement = screen.getByPlaceholderText(/Search by name/i);
        expect(searchElement).toBeInTheDocument();

    })
})

