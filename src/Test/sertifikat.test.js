//test card component
import React from "react";
import Gallery from "../Pages/gallery";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store/store";
import AddSertifikat from "../Components/Form/tambah_sertif";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import SertifikatSlice, { initialState } from "../Store/sertifikat";

describe("Sertifikat", () => {
  test('Render', () => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <Gallery />
            </BrowserRouter>
        </Provider>
     )
  })
  test("initialize slice with initialValue", () => {
      const listSliceInit = SertifikatSlice(initialState, { type: "unknown" });
      expect(listSliceInit).toBe(initialState);
  });
  test('Input Judul', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSertifikat/>
            </BrowserRouter>
        </Provider>
      )
      const inputJudul = screen.getByRole("input-judul")
      fireEvent.change(inputJudul, {target: {value: "Lomba Menulis"}})
      expect(inputJudul.value).toBe('Lomba Menulis')
  })
  test('Input Lomba', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSertifikat/>
            </BrowserRouter>
        </Provider>
      )
      const inputLomba = screen.getByRole("input-lomba")
      fireEvent.change(inputLomba, {target: {value: "FLS2N"}})
      expect(inputLomba.value).toBe('FLS2N')
  })
  test('Input Cover', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSertifikat/>
            </BrowserRouter>
        </Provider>
      )
      const inputCover = screen.getByRole("input-cover")
      fireEvent.change(inputCover, {target: {value: "Link"}})
      expect(inputCover.value).toBe('Link')
  })
});