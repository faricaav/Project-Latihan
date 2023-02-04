import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    sertifikat: [
        {
            judul:"Lomba Menulis Nasional", lomba:"Tere Liye Competition",
            cover:"https://1.bp.blogspot.com/-4wcv_UERR28/YU2Kfse0yqI/AAAAAAAAFhw/nZSRAp8MnyA57cZrwlKqfSlHX4EujiBcACLcBGAsYHQ/s2048/sertifikat%2Bcopy.jpg" 
        },
        {
            judul:"Lomba Menyanyi Nasional", lomba:"FLS2N",
            cover:"https://posi.id/wp-content/uploads/2021/09/Sertifikat-Hardiknas.png" 
        },
        {
            judul:"Lomba Business Plan Nasional", lomba:"Business Plan BINUS University",
            cover:"https://statik.unesa.ac.id/profileunesa_konten_statik/uploads/s1pkimia/file/43071f8b-3cf2-404b-ad44-367a6b9fb8fc.jpeg" 
        },
        {
            judul:"Lomba Desain Grafis Nasional", lomba:"Rubik Grafis Competition",
            cover:"https://1.bp.blogspot.com/-UWzI6qOGRJM/X6oRlQuiioI/AAAAAAAAHck/oHhcTTyyqiA9yqd7kyrVe7yl3UcnFwqvACLcBGAsYHQ/w1200-h630-p-k-no-nu/template-sertifikat.jpg" 
        }
    ]};

export const sertifikatSlice = createSlice({
  name: "sertifikat",
  initialState,
  reducers: {},
});

export default sertifikatSlice.reducer;