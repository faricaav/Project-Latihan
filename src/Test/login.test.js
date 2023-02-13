import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../Pages/Login/login.js";
import { Provider } from 'react-redux';
import store from "../Store/store"

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Component dashboard test', () => {
    test('Render', () => {
        render(<Provider store={store}><Login/></Provider>)
    })
    test('Input Username', async() => {
        render(<Provider store={store}><Login/></Provider>)
        const inputUsername = screen.getByRole("input-username")
        fireEvent.change(inputUsername, {target: {value: "farica"}})
        expect(inputUsername.value).toBe('farica')
    })
    test('Input Password', async() => {
        render(<Provider store={store}><Login/></Provider>)
        const inputPassword = screen.getByRole("input-password")
        fireEvent.change(inputPassword, {target: {value: "12345"}})
        expect(inputPassword.value).toBe('12345')
    })
    test('Login', async() => {
        render(<Provider store={store}><Login/></Provider>)
        expect(screen.getByRole("input-username")).toBeInTheDocument();
        expect(screen.getByRole("input-password")).toBeInTheDocument();
        expect(screen.getByRole("get-user")).toBeInTheDocument();
    })
})