import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "../Services/users"

const initialState = [];

export const retrieveUsers = createAsyncThunk(
  "users",
  async () => {
    const res = await UsersService.getAll();
    return res.data;
  }
);

export const createUsers = createAsyncThunk(
  "users/add",
  async ({ name, username, email, phone }) => {
    const res = await UsersService.create({ name, username, email, phone });
    // console.log(data)
    return res.data;
  }
);

export const putUsers = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const res = await UsersService.update(id, data);
    return res.data;
  }
);

export const deleteUsers = createAsyncThunk(
  "users/delete",
  async ({ id }) => {
    await UsersService.remove(id);
    return { id };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [createUsers.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveUsers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [putUsers.fulfilled]: (state, action) => {
      const index = state.findIndex(users => users.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteUsers.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  }
});

export default usersSlice.reducer;