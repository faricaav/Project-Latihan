import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    siswa: [
        {nis: "100", nama: "Sheva", alamat: "Surabaya", jurusan: "TKJ", sertifikat: "true"},  
        {nis: "101", nama: "Shiva", alamat: "Malang", jurusan: "RPL", sertifikat: "true"},  
        {nis: "102", nama: "Shava", alamat: "Pasuruan", jurusan: "RPL", sertifikat: "false"},
    ]};

export const siswaSlice = createSlice({
  name: "siswa",
  initialState,
  reducers: {
    tambahSiswa(state, action) {
        state.siswa.push(action.payload);
    },
    updateSiswa(state, action) {
        const { nis, nama, alamat, jurusan, sertifikat } = action.payload;
        const existingSiswa = state.siswa.find((siswa) => siswa.nis === nis);
        if (existingSiswa) {
          existingSiswa.nis = nis;
          existingSiswa.nama = nama;
          existingSiswa.alamat = alamat;
          existingSiswa.jurusan = jurusan;
          existingSiswa.sertifikat = sertifikat;
        }
    },
    deleteSiswa(state, action) {
      if(window.confirm("Apakah yakin untuk menghapus?")){
        state.siswa = state.siswa.filter(
          (siswa) => siswa.nis !== action.payload
        );
      }
    }
  },
});

export const asyncSiswa = (siswa) => (dispatch) => {
    setTimeout(() => {
      dispatch(tambahSiswa(siswa));
      dispatch(updateSiswa(siswa));
      dispatch(deleteSiswa(siswa));
    }, 1000);
};

export const { tambahSiswa, updateSiswa, deleteSiswa } = siswaSlice.actions;

export default siswaSlice.reducer;