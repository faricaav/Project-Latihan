import { configureStore } from "@reduxjs/toolkit";
import siswaReducer from "./siswa";
import sertifikatReducer from "./sertifikat";
import usersReducer from "./users"
import artikelReducer from "./artikel"

export default configureStore({
  reducer: {
    siswa: siswaReducer,
    sertifikat: sertifikatReducer,
    users: usersReducer,
    artikel: artikelReducer
  },
});
