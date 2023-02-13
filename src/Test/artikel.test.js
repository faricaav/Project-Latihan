//test card component
import React from "react";
import Artikel from "../Components/artikel";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store/store";
import AddArtikel from "../Components/Form/tambah_artikel";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import ArtikelSlice, { initialState } from "../Store/artikel";

describe("Artikel", () => {
  test('Render', () => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <Artikel />
            </BrowserRouter>
        </Provider>
     )
  })
  test("initialize slice with initialValue", () => {
      const listSliceInit = ArtikelSlice(initialState, { type: "unknown" });
      expect(listSliceInit).toBe(initialState);
  });
  test('Input Karya', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddArtikel/>
            </BrowserRouter>
        </Provider>
      )
      const inputKarya = screen.getByRole("input-karya")
      fireEvent.change(inputKarya, {target: {value: "Farica"}})
      expect(inputKarya.value).toBe('Farica')
  })
  test('Input Tanggal Publish', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddArtikel/>
            </BrowserRouter>
        </Provider>
      )
      const inputTanggal = screen.getByRole("input-tanggal")
      fireEvent.change(inputTanggal, {target: {value: "2023-01-01"}})
      expect(inputTanggal.value).toBe('2023-01-01')
  })
  test('Input Isi', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddArtikel/>
            </BrowserRouter>
        </Provider>
      )
      const inputIsi = screen.getByRole("input-isi")
      fireEvent.change(inputIsi, {target: {value: "Lorem ipsum"}})
      expect(inputIsi.value).toBe('Lorem ipsum')
  })
});