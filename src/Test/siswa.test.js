//test card component
import React from "react";
import List from "../Components/list";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import configureStore from "redux-mock-store";
import AddSiswa from "../Components/Form/tambah_siswa";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import SiswaSlice, { tambahSiswa, initialState } from "../Store/siswa";

const siswa= [
    {nis: "100", nama: "Sheva", alamat: "Surabaya", jurusan: "TKJ", sertifikat: "true"},  
    {nis: "101", nama: "Shiva", alamat: "Malang", jurusan: "RPL", sertifikat: "true"},  
    {nis: "102", nama: "Shava", alamat: "Pasuruan", jurusan: "RPL", sertifikat: "false"},
];

describe("Siswa", () => {
    const mockStore = configureStore([]);
    let store;
    beforeEach(() => {
      store = mockStore({
        siswa: {
          siswa: siswa,
        },
      });
    });
    test('Render', () => {
      render(
          <Provider store={store}>
              <BrowserRouter>
                  <List />
              </BrowserRouter>
          </Provider>
      )
    })
    test("Siswa", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
              <List />
          </BrowserRouter>
        </Provider>
      );
      const list = screen.getAllByTestId("list-item");
      expect(list.length).toEqual(3);
    });
    test("Delete", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
              <List siswa={siswa[0]}/>
          </BrowserRouter>
        </Provider>
      );
      fireEvent.click(screen.getByTestId(`delete-${0}`));
      expect(screen.getByTestId(`delete-${0}`)).toBeInTheDocument();
    });
    test("initialize slice with initialValue", () => {
      const listSliceInit = SiswaSlice(initialState, { type: "unknown" });
      expect(listSliceInit).toBe(initialState);
    });
    test("testAddReducer", () => {
      const testData = {
        nis: "103",
        nama: "Ica",
        alamat: "Malang",
        jurusan: "RPL",
        sertifikat: "true",
      };

      const afterReducerOperation = SiswaSlice(
        initialState,
        tambahSiswa(testData)
      );
      expect(afterReducerOperation).toEqual({
          siswa : initialState.siswa.concat(testData)
      });
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
    test('Input NIS', async() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
                <AddSiswa/>
            </BrowserRouter>
          </Provider>
        )
        const inputNis = screen.getByRole("input-nis")
        fireEvent.change(inputNis, {target: {value: "12345"}})
        expect(inputNis.value).toBe('12345')
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
    test('Input Sertifikat', async() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
              <AddSiswa/>
          </BrowserRouter>
        </Provider>
      )
      const inputSertifikat = screen.getByRole("input-sertifikat-true")
      fireEvent.change(inputSertifikat, {target: {value: "true"}})
      expect(inputSertifikat.value).toBe('true')
    })
});