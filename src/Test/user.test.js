//test card component
import React from "react";
import Users from "../Components/users"
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import UsersSlice, { createUsers, initialState } from "../Store/users";
import store from "../Store/store";
import AddUsers from "../Components/Form/tambah_users";

describe("Users", () => {
    test('Render', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Users />
                </BrowserRouter>
            </Provider>
       )
    })
    test("initialize slice with initialValue", () => {
        const listSliceInit = UsersSlice(initialState, { type: "unknown" });
        expect(listSliceInit).toBe(initialState);
    });
    test('Input Name', async() => {
        render(
          <Provider store={store}>
              <BrowserRouter>
                  <AddUsers/>
              </BrowserRouter>
          </Provider>
        )
        const inputName = screen.getByRole("input-name")
        fireEvent.change(inputName, {target: {value: "farica"}})
        expect(inputName.value).toBe('farica')
    })
    test('Input Username', async() => {
        render(
          <Provider store={store}>
              <BrowserRouter>
                  <AddUsers/>
              </BrowserRouter>
          </Provider>
        )
        const inputUsername = screen.getByRole("input-username")
        fireEvent.change(inputUsername, {target: {value: "farica"}})
        expect(inputUsername.value).toBe('farica')
    })
    test('Input Email', async() => {
        render(
          <Provider store={store}>
              <BrowserRouter>
                  <AddUsers/>
              </BrowserRouter>
          </Provider>
        )
        const inputEmail = screen.getByRole("input-email")
        fireEvent.change(inputEmail, {target: {value: "farica@gmail.com"}})
        expect(inputEmail.value).toBe('farica@gmail.com')
    })
    test('Input Phone', async() => {
        render(
          <Provider store={store}>
              <BrowserRouter>
                  <AddUsers/>
              </BrowserRouter>
          </Provider>
        )
        const inputPhone = screen.getByRole("input-phone")
        fireEvent.change(inputPhone, {target: {value: "08123456789"}})
        expect(inputPhone.value).toBe('08123456789')
    })
});