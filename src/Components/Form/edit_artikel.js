import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { putArtikel } from "../../Store/artikel";
import { Button } from "../../stories/Button";
import ArtikelService from "../../Services/artikel";

export default function UpdateArtikel() {
  const {_id} = useParams();
  let navigate = useNavigate();

  const initialArtikelState = {
    _id: 0,
    karya: "",
    tanggal_publish: "",
    isi: ""
  };
  const [currentArtikel, setCurrentArtikel] = useState(initialArtikelState);

  const dispatch = useDispatch();

  const getArtikel = _id => {
    ArtikelService.get(_id)
      .then(response => {
        setCurrentArtikel(response.data);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (_id)
      getArtikel(_id);
      console.log(_id)
  }, [_id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentArtikel({ ...currentArtikel, [name]: value });
  };
  
  const updateArtikel = () => {
    console.log("tes", currentArtikel)
    dispatch(putArtikel({ _id: currentArtikel._id, data: currentArtikel }))
      .unwrap()
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
    navigate("/artikel")
  };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Edit Artikel</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={updateArtikel}>
          {/* <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">NIS</label>
            <input
              type="text"
              name="_id"
              className="form-control"
              value={currentArtikel._id}
              onChange={handleInputChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Karya</label>
            <input
              type="text"
              name="karya"
              className="form-control"
              value={currentArtikel.karya}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Tanggal Publish</label>
            <input
              type="date"
              name="tanggal_publish"
              className="form-control"
              value={currentArtikel.tanggal_publish}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Isi</label>
            <textarea
              type="text"
              name="isi"
              className="form-control"
              value={currentArtikel.isi}
              onChange={handleInputChange}
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
