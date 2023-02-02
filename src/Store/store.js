import { configureStore } from "@reduxjs/toolkit";
import siswaReducer from "./siswa";
import sertifikatReducer from "./sertifikat";
import userReducer from "./login"
import usersReducer from "./users"

export default configureStore({
  reducer: {
    siswa: siswaReducer,
    sertifikat: sertifikatReducer,
    user: userReducer,
    users: usersReducer,
  },
});
