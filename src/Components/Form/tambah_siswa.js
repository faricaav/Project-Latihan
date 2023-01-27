import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { tambahSiswa } from "../../Store/siswa";

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

    const nis = e.target.nis.value;
    const nama = e.target.nama.value;
    const alamat = e.target.alamat.value;
    const jurusan = e.target.jurusan.value;
    const sertifikat = e.target.sertifikat.value;

    const newSiswa = {
      nis,
      nama,
      alamat,
      jurusan,
      sertifikat,
    };

    dispatch(tambahSiswa(newSiswa));

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
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">NIS</label>
            <input
              type="text"
              name="nis"
              className="form-control"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Nama</label>
            <input
              type="text"
              name="nama"
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
              className="form-control"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
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
                    value="false"
                    checked={sertifikat === "false"}
                    onChange={(e) => setSertifikat(e.target.value)}
                  />
                  &nbsp; Tidak Ada
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
          <Link to={"/list"}>
            <button className="btn btn-danger mt-5 mx-2">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
