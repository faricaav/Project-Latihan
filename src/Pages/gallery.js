import React, {useState, useEffect} from "react";
import Card from "../Components/card";
import { Link, useParams } from "react-router-dom";
import Alert from "../stories/Alert";
import SertifikatService from "../Services/sertifikat";
import SiswaService from "../Services/siswa";

export default function Gallery(){
    const {nis} = useParams();
    const [siswa, setSiswa] = useState([])
    const [sertifikat, setSertifikat] = useState([])

    const getSertif = nis => {
        SertifikatService.getAll(nis)
          .then(response => {
            setSertifikat(response.data)
            console.log(response.data)
          })
          .catch(e => {
            console.log(e);
          });
    };

    const getSiswa = nis => {
        SiswaService.get(nis)
          .then(response => {
            setSiswa(response.data)
            console.log(response.data)
          })
          .catch(e => {
            console.log(e);
          });
    };
    
    useEffect(() => {
    if (nis)
        getSertif(nis);
        getSiswa(nis);
    }, [nis]);

    const nisSiswa = siswa.nis;

    return (  
        <div style={{paddingLeft:"10%", paddingTop:"30px"}}>
        <div className="container">
            <div className="card mt-5">
                <div className="card-body">
                    <p className="text-black font-weight" align="left">
                        <b>NIS &emsp;&emsp;&emsp;&emsp;: </b>&emsp;{siswa.nis}
                    </p>
                    <p className="text-black" align="left">
                        <b>Nama &emsp;&ensp;&ensp;&emsp;: </b>&emsp;{siswa.nama}
                    </p>
                    <p className="text-black" align="left">
                        <b>Alamat &emsp;&ensp;&emsp;: </b>&emsp;{siswa.alamat}
                    </p>
                    <p className="text-black" align="left">
                        <b>Jurusan &emsp;&emsp;: </b>&emsp;{siswa.jurusan}
                    </p>
                    <br/>
                    <Link to={`/addSertif/${nisSiswa}`}>
                        <button
                        className="btn btn-sm btn-white col-sm-12"
                        data-toggle="modal"
                        data-target="#modal"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-circle"
                            viewBox="0 0 18 18"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>{" "}
                        Tambah Sertifikat
                        </button>
                    </Link>
                    <br/>
                    <div className="row">
                        {  sertifikat.length>0 && sertifikat.map( (item, index) => (
                            <Card key={index} data-testid="list-item"
                            judul={item.judul}
                            lomba={item.lomba}
                            cover={item.cover}
                            />
                        )) }
                        { sertifikat.length===0 &&
                        <div align="center">
                            <Alert variant="danger">
                                Belum ada sertifikat
                            </Alert>
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