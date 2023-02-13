import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "../Services/users"

export const initialState = [];

export const retrieveUsers = createAsyncThunk(
  "users",
  async () => {
    const res = await UsersService.getAll();
    return res.data;
  }
);

export const createUsers = createAsyncThunk(
  "users/add",
  async ({ id, name, username, email, password}) => {
    const res = await UsersService.create({ id, name, username, email, password});
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

export const usersSlice = createSlice({
  name: "users",
  initialState:{
    createUsersIsPending: false,
  },
  reducers: {},
  extraReducers: {
    [createUsers.fulfilled]: (state, action) => {
      state.createUsersIsPending = false
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