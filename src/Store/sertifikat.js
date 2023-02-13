import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SertifikatService from "../Services/sertifikat";

export const initialState = [];

export const retrieveSertifikat = createAsyncThunk(
  "sertifikat",
  async ({nis}) => {
    const res = await SertifikatService.getAll(nis);
    return res.data;
  }
);

export const createSertifikat = createAsyncThunk(
  "sertifikat/add",
  async ({ nis, judul, lomba, cover }) => {
    const res = await SertifikatService.create({nis, judul, lomba, cover });
    // console.log(data)
    return res.data;
  }
);

export const putSertifikat = createAsyncThunk(
  "sertifikat/update",
  async ({ id, data }) => {
    const res = await SertifikatService.update(id, data);
    return res.data;
  }
);

export const deleteSertifikat = createAsyncThunk(
  "sertifikat/delete",
  async ({ id }) => {
    await SertifikatService.remove(id);
    return { id };
  }
);

export const sertifikatSlice = createSlice({
  name: "sertifikat",
  initialState,
  reducers: {},
  extraReducers: {
    [createSertifikat.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveSertifikat.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [putSertifikat.fulfilled]: (state, action) => {
      const index = state.findIndex(sertifikat => sertifikat.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteSertifikat.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  }
});

export default sertifikatSlice.reducer;