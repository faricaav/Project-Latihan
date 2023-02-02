import React from "react";
import {Routes, Route, Outlet} from 'react-router-dom';

import Dashboard from './dashboard';
import Gallery from "../Pages/gallery";
import List from "./list";
import Login from "../Pages/Login/login";
import Sidebar from "./sidebar";
import AddSiswa from "./Form/tambah_siswa";
import UpdateSiswa from "./Form/edit_siswa";
import Users from "./users";
import AddUsers from "./Form/tambah_users";
import UpdateUsers from "./Form/edit_users";

const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
);

const Main=()=>(
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route element={<SidebarLayout/>}>
            <Route path="/dashboard" element={<Dashboard 
                greetings="Welcome" 
                text1="Ayo tingkatkan literasi!"
                paragraph1="Karena buku adalah jendela dunia"
                image1="https://img.freepik.com/free-vector/kids-reading-concept-illustration_114360-8513.jpg?w=1380&t=st=1674313899~exp=1674314499~hmac=ebd3c9d158fa123f572de3aeaa9378d27d64dca611d029e509ddc154c1ecb497"
                text2="Ayo ke perpustakaan!"
                paragraph2="Karena dengan buku kita bisa mengetahui banyak hal"
                image2="https://img.freepik.com/free-vector/literature-concept-illustration_114360-8383.jpg?w=1380&t=st=1674313953~exp=1674314553~hmac=de3993609c38e480c6de86dbadbcf5de6f33f14c9bfd73be93e21760a6ab341a"
                text3="Ayo belajar!"
                paragraph3="Belajar dengan membaca buku adalah hal yang menyenangkan"
                image3="https://img.freepik.com/free-vector/reading-glasses-concept-illustration_114360-8514.jpg?w=1380&t=st=1674313748~exp=1674314348~hmac=3e459beabea305dbb2a75ac3f45e2da8ba83515ec51db902a38fe7e659ba3730"
            />}/>
            <Route path="/gallery/:nis" element={<Gallery/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/addSiswa" element={<AddSiswa/>} />
            <Route path="/addUsers" element={<AddUsers/>} />
            <Route path="/updateSiswa/:nis" element={<UpdateSiswa/>} />
            <Route path="/updateUsers/:id" element={<UpdateUsers/>} />
        </Route>
    </Routes>
)

export default Main; 