import { screen, render } from "@testing-library/react";
import Dashboard from "../Components/dashboard";

describe('Component dashboard test', () => {
    test('Dashboard Render', () => {
        render(<Dashboard/>)
    })
    test('Heading Dashboard', () => {
        render(<Dashboard/>)
        expect(screen.getAllByRole('heading', {level: 2}));
    })
    test('Carousel Dashboard', () => {
        render(<Dashboard/>)
        expect(screen.getAllByRole('carousel'));
    })
})