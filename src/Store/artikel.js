import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ArtikelService from "../Services/artikel";

export const initialState = [];

export const retrieveArtikel = createAsyncThunk(
  "artikel",
  async () => {
    const res = await ArtikelService.getAll();
    return res.data;
  }
);

export const createArtikel = createAsyncThunk(
  "artikel/add",
  async ({ karya, tanggal_publish, isi }) => {
    const res = await ArtikelService.create({ karya, tanggal_publish, isi });
    // console.log(data)
    return res.data;
  }
);

export const putArtikel = createAsyncThunk(
  "artikel/update",
  async ({ _id, data }) => {
    const res = await ArtikelService.update(_id, data);
    return res.data;
  }
);

export const deleteArtikel = createAsyncThunk(
  "artikel/delete",
  async ({ _id }) => {
    await ArtikelService.remove(_id);
    return { _id };
  }
);

export const artikelSlice = createSlice({
  name: "artikel",
  initialState,
  reducers: {},
  extraReducers: {
    [createArtikel.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveArtikel.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [putArtikel.fulfilled]: (state, action) => {
      const index = state.findIndex(artikel => artikel._id === action.payload._id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteArtikel.fulfilled]: (state, action) => {
      let index = state.findIndex(({ _id }) => _id === action.payload._id);
      state.splice(index, 1);
    },
  }
});

export default artikelSlice.reducer;