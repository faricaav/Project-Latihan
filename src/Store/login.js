import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            username: "farica",
            password: "12345"
        },
        {
            username: "admin",
            password: "12345"
        }
    ]};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;