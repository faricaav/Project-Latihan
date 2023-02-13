import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { putSiswa } from "../../Store/siswa";
import { Button } from "../../stories/Button";
import SiswaService from "../../Services/siswa";

export default function UpdateSiswa() {
  const {nis} = useParams();
  let navigate = useNavigate();

  const initialSiswaState = {
    nis: 0,
    nama: "",
    alamat: "",
    jurusan: "",
    sertifikat: ""
  };
  const [currentSiswa, setCurrentSiswa] = useState(initialSiswaState);

  const dispatch = useDispatch();

  const getSiswa = nis => {
    SiswaService.get(nis)
      .then(response => {
        setCurrentSiswa(response.data);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (nis)
      getSiswa(nis);
      console.log(nis)
  }, [nis]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentSiswa({ ...currentSiswa, [name]: value });
  };
  
  const updateSiswa = () => {
    console.log("tes", currentSiswa)
    dispatch(putSiswa({ nis: currentSiswa.nis, data: currentSiswa }))
      .unwrap()
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
    navigate("/list")
  };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Edit Siswa</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={updateSiswa}>
          {/* <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">NIS</label>
            <input
              type="text"
              name="nis"
              className="form-control"
              value={currentSiswa.nis}
              onChange={handleInputChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Nama</label>
            <input
              type="text"
              name="nama"
              className="form-control"
              value={currentSiswa.nama}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Alamat</label>
            <input
              type="text"
              name="alamat"
              className="form-control"
              value={currentSiswa.alamat}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Jurusan</label>
            <input
              type="text"
              name="jurusan"
              className="form-control"
              value={currentSiswa.jurusan}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Sertifikat</label>
            <div class="col-sm-10">
              <div className="radio mt-2">
                <label>
                  <input
                    type="radio"
                    name="sertifikat"
                    value="true"
                    checked={currentSiswa.sertifikat === "true"}
                    onChange={handleInputChange}
                  />
                  &nbsp; Ada
                </label>
                &emsp;
                <label>
                  <input
                    type="radio"
                    name="sertifikat"
                    value="false"
                    checked={currentSiswa.sertifikat === "false"}
                    onChange={handleInputChange}
                  />
                  &nbsp; Tidak Ada
                </label>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <Button type="submit" primary={true} label="Submit">
          </Button>
          <Link to={"/list"}>
            <Button type="submit" danger={true} label="Cancel"></Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
