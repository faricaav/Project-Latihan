import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createSiswa } from "../../Store/siswa";
import { Button } from "../../stories/Button";

export default function AddSiswa() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [sertifikat, setSertifikat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const nis = e.target.nis.value;
    const nama = e.target.nama.value;
    const alamat = e.target.alamat.value;
    const jurusan = e.target.jurusan.value;
    const sertifikat = e.target.sertifikat.value;

    const newSiswa = {
      nama,
      alamat,
      jurusan,
      sertifikat,
    };

    dispatch(createSiswa(newSiswa));

    setNis("");
    setNama("");
    setAlamat("");
    setJurusan("");
    setSertifikat("");

    navigate("/list");

    console.log(newSiswa);
  };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Tambah Siswa</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">NIS</label>
            <input
              type="text"
              name="nis"
              role="input-nis"
              className="form-control"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              required
            />
          </div> */}
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Nama</label>
            <input
              type="text"
              name="nama"
              role="input-nama"
              className="form-control"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Alamat</label>
            <input
              type="text"
              name="alamat"
              role="input-alamat"
              className="form-control"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Jurusan</label>
            <input
              type="text"
              name="jurusan"
              role="input-jurusan"
              className="form-control"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Sertifikat</label>
            <div className="col-sm-10">
              <div className="radio mt-2">
                <label>
                  <input
                    type="radio"
                    name="sertifikat"
                    role="input-sertifikat-true"
                    value="true"
                    checked={sertifikat === "true"}
                    onChange={(e) => setSertifikat(e.target.value)}
                  />
                  &nbsp; Ada
                </label>
                &emsp;
                <label>
                  <input
                    type="radio"
                    name="sertifikat"
                    role="input-sertifikat-false"
                    value="false"
                    checked={sertifikat === "false"}
                    onChange={(e) => setSertifikat(e.target.value)}
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
