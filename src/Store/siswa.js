import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SiswaService from "../Services/siswa";

export const initialState = [];

export const retrieveSiswa = createAsyncThunk(
  "siswa",
  async () => {
    const res = await SiswaService.getAll();
    return res.data;
  }
);

export const createSiswa = createAsyncThunk(
  "siswa/add",
  async ({ nama, alamat, jurusan, sertifikat }) => {
    const res = await SiswaService.create({ nama, alamat, jurusan, sertifikat });
    // console.log(data)
    return res.data;
  }
);

export const putSiswa = createAsyncThunk(
  "siswa/update",
  async ({ nis, data }) => {
    const res = await SiswaService.update(nis, data);
    return res.data;
  }
);

export const deleteSiswa = createAsyncThunk(
  "siswa/delete",
  async ({ nis }) => {
    await SiswaService.remove(nis);
    return { nis };
  }
);

export const siswaSlice = createSlice({
  name: "siswa",
  initialState,
  reducers: {},
  extraReducers: {
    [createSiswa.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveSiswa.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [putSiswa.fulfilled]: (state, action) => {
      const index = state.findIndex(siswa => siswa.nis === action.payload.nis);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteSiswa.fulfilled]: (state, action) => {
      let index = state.findIndex(({ nis }) => nis === action.payload.nis);
      state.splice(index, 1);
    },
  }
});

export default siswaSlice.reducer;