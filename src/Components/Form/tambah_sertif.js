import { useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState } from "react";
import { createSertifikat } from "../../Store/sertifikat";
import { Button } from "../../stories/Button";

export default function AddSertifikat() {
    // const {nisSiswa} = useParams(); 
    // console.log(nisSiswa)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ nisSiswa, setNis] = useState("");
    const [judul, setJudul] = useState("");
    const [cover, setCover] = useState("");
    const [lomba, setLomba] = useState("");

    const {nis} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const judul = e.target.judul.value;
        const lomba = e.target.lomba.value;
        const cover = e.target.cover.value;

        const newSertifikat = {
            nis, 
            judul,
            lomba,
            cover
        };

        dispatch(createSertifikat(newSertifikat));

        setNis("");
        setJudul("");
        setLomba("");
        setCover("");

        navigate(`/gallery/${nis}`);

        console.log(newSertifikat);
    };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Tambah Sertifikat</b>
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
            <label className="col-sm-2 col-form-label mt-2">Judul</label>
            <input
              type="text"
              name="judul"
              role="input-judul"
              className="form-control"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Lomba</label>
            <input
              type="text"
              name="lomba"
              role="input-lomba"
              className="form-control"
              value={lomba}
              onChange={(e) => setLomba(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Link Foto</label>
            <input
              type="text"
              name="cover"
              role="input-cover"
              className="form-control"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              required
            />
          </div>
          <br/>
          <br/>
          <Button type="submit" primary={true} label="Submit">
          </Button>
          <Link to={`/gallery/${nis}`}>
            <Button type="submit" danger={true} label="Cancel"></Button>
          </Link>
        </form>
      </div>
    </div>
  );
}