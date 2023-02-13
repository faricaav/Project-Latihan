//test card component
import React from "react";
import List from "../Components/list";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../Store/store";
import AddSiswa from "../Components/Form/tambah_siswa";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import SiswaSlice, { initialState } from "../Store/siswa";

describe("Siswa", () => {
  test('Render', () => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <List />
            </BrowserRouter>
        </Provider>
     )
  })
  test("initialize slice with initialValue", () => {
      const listSliceInit = SiswaSlice(initialState, { type: "unknown" });
      expect(listSliceInit).toBe(initialState);
  });
  test('Input Nama', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSiswa/>
            </BrowserRouter>
        </Provider>
      )
      const inputNama = screen.getByRole("input-nama")
      fireEvent.change(inputNama, {target: {value: "farica"}})
      expect(inputNama.value).toBe('farica')
  })
  test('Input Alamat', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSiswa/>
            </BrowserRouter>
        </Provider>
      )
      const inputAlamat = screen.getByRole("input-alamat")
      fireEvent.change(inputAlamat, {target: {value: "Malang"}})
      expect(inputAlamat.value).toBe('Malang')
  })
  test('Input Jurusan', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSiswa/>
            </BrowserRouter>
        </Provider>
      )
      const inputJurusan = screen.getByRole("input-jurusan")
      fireEvent.change(inputJurusan, {target: {value: "RPL"}})
      expect(inputJurusan.value).toBe('RPL')
  })
  test('Input Sertifikat True', async() => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <AddSiswa/>
            </BrowserRouter>
        </Provider>
      )
      const inputTrue = screen.getByRole("input-sertifikat-true")
      fireEvent.change(inputTrue, {target: {value: "true"}})
      expect(inputTrue.value).toBe('true')
  })
  test('Input Sertifikat False', async() => {
    render(
      <Provider store={store}>
          <BrowserRouter>
              <AddSiswa/>
          </BrowserRouter>
      </Provider>
    )
    const inputFalse = screen.getByRole("input-sertifikat-false")
    fireEvent.change(inputFalse, {target: {value: "false"}})
    expect(inputFalse.value).toBe('false')
})
});