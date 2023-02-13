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
  async ({ _id, data }) => {
    const res = await UsersService.update(_id, data);
    return res.data;
  }
);

export const deleteUsers = createAsyncThunk(
  "users/delete",
  async ({ _id }) => {
    await UsersService.remove(_id);
    return { _id };
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
      const index = state.findIndex(users => users._id === action.payload._id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteUsers.fulfilled]: (state, action) => {
      let index = state.findIndex(({ _id }) => _id === action.payload._id);
      state.splice(index, 1);
    },
  }
});

export default usersSlice.reducer;