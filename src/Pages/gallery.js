import React, {useState, useEffect} from "react";
import Card from "../Components/card";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

export default function Gallery(){
    const sertifikat = useSelector((state) => state.sertifikat.sertifikat);
    const { pathname } = useLocation();

    const nisSiswa = pathname.replace("/gallery/", "");

    const siswa = useSelector((state) =>
        state.siswa.siswa.find((item) => item.nis === nisSiswa)
    );

    const [nis] = useState(siswa.nis);
    const [nama] = useState(siswa.nama);
    const [alamat] = useState(siswa.alamat);
    const [jurusan] = useState(siswa.jurusan);

    let [keyword, setKeyword] = useState("")
    const [filteredSertif, setFilteredSertif] = useState(sertifikat)

    const searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter
 
            let keywords = keyword.toLowerCase()
            let tempSertif = sertifikat
            let result = tempSertif.filter(item => {
                return item.judul.toLowerCase().includes(keywords) ||
                item.lomba.toLowerCase().includes(keywords)
            })
 
            setFilteredSertif([...result])
        }
    }

    return (  
        <div style={{paddingLeft:"10%", paddingTop:"30px"}}>
        <div className="container">
            <div className="card mt-5">
                <div className="card-body">
                    <p className="text-black font-weight" align="left">
                        <b>NIS &emsp;&emsp;&emsp;&emsp;: </b>&emsp;{nis}
                    </p>
                    <p className="text-black" align="left">
                        <b>Nama &emsp;&ensp;&ensp;&emsp;: </b>&emsp;{nama}
                    </p>
                    <p className="text-black" align="left">
                        <b>Alamat &emsp;&ensp;&emsp;: </b>&emsp;{alamat}
                    </p>
                    <p className="text-black" align="left">
                        <b>Jurusan &emsp;&emsp;: </b>&emsp;{jurusan}
                    </p>
                    <br/>
                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                        <input type="text" className="form-control" placeholder="Masukkan Judul Sertifikat" aria-label="Masukkan Judul Sertifikat" aria-describedby="basic-addon1"
                        value={keyword}
                        onChange={ev => setKeyword(ev.target.value)}
                        onKeyUp={ev => searching(ev)}/>
                    </div>
                    <div className="row">
                        { siswa.sertifikat === "true" && filteredSertif.map( (item, index) => (
                            <Card
                            judul={item.judul}
                            lomba={item.lomba}
                            cover={item.cover}
                            />
                        )) }
                        {siswa.sertifikat === "false" && 
                        <div align="center">
                            <div className="alert alert-danger col-md-12">
                                Belum ada sertifikat
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <br/>
            <Link to="/list">
            <button className="btn btn-sm btn-primary col-sm-12 shadow p-2 mb-5 rounded">
            Back
            </button>
            </Link>
        </div>
        </div>
    );
}