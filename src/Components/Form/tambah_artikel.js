import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createArtikel } from "../../Store/artikel";
import { Button } from "../../stories/Button";

export default function AddArtikel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [karya, setKarya] = useState("");
  const [tanggal_publish, setTanggalPublish] = useState("");
  const [isi, setIsi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const id = e.target.id.value;
    const karya = e.target.karya.value;
    const tanggal_publish = e.target.tanggal_publish.value;
    const isi = e.target.isi.value;

    const newArtikel = {
      karya,
      tanggal_publish,
      isi
    };

    dispatch(createArtikel(newArtikel));

    setId("");
    setKarya("");
    setTanggalPublish("");
    setIsi("");

    navigate("/artikel");

    console.log(newArtikel);
  };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Tambah Artikel</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">NIS</label>
            <input
              type="text"
              name="id"
              role="input-id"
              className="form-control"
              value={id}
              onChange={(e) => setNis(e.target.value)}
              required
            />
          </div> */}
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Karya</label>
            <input
              type="text"
              name="karya"
              role="input-karya"
              className="form-control"
              value={karya}
              onChange={(e) => setKarya(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Tanggal Publish</label>
            <input
              type="date"
              name="tanggal_publish"
              role="input-tanggal"
              className="form-control"
              value={tanggal_publish}
              onChange={(e) => setTanggalPublish(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Isi</label>
            <textarea
              type="text"
              name="isi"
              role="input-isi"
              className="form-control"
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              required
            />
          </div>
          <br/>
          <br/>
          <Button type="submit" primary={true} label="Submit">
          </Button>
          <Link to={"/artikel"}>
            <Button type="submit" danger={true} label="Cancel"></Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
