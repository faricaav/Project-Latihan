import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArtikel, retrieveArtikel } from "../Store/artikel";
import "../stories/table.css"
import { Button } from "../stories/Button";
import { EmptyDataArtikel } from "../stories/Table.stories";
import { useNavigate } from "react-router-dom";

export default function Artikel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const artikel = useSelector((state) => state.artikel);
  console.log(artikel.length)

  const removeArtikel = (item) => {
    if(window.confirm("Apakah yakin untuk menghapus?")){
      dispatch(deleteArtikel({ _id: item._id }))
        .unwrap()
        .then(() => {
          navigate("/artikel");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const initFetch = useCallback(() => {
    dispatch(retrieveArtikel());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])
  return (
    <div
      className="container my-n5 mt-5"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <b>
        <h4 align="left">List Artikel</h4>
      </b>
      <br />
      <Link to={`/addArtikel`}>
        <button
          className="btn btn-sm btn-success col-sm-12 shadow p-2 mb-1 rounded"
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
          Tambah Data
        </button>
      </Link>
      {/* generate list */}
      <br />
      <br />
      {artikel.length===0 && <EmptyDataArtikel/>}
      {artikel.length>0 && 
      <ul className="list-group ">
        <table>
          <thead>
            <tr>
              <th>Karya</th>
              <th>Tanggal Publish</th>
              <th>Isi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {artikel.map((item, index) => {
              return (
                <tr align="center" key={index} data-testid="list-item">
                  <td>{item.karya}</td>
                  <td>{item.tanggal_publish}</td>
                  <td>{item.isi}</td>
                  <td>
                    <Link to={`/updateArtikel/${item._id}`}>
                      <Button
                        primary={true}
                        size="small"
                        label={<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 18 18"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>}
                      >
                      </Button>
                    </Link>
                    <Button
                      danger={true}
                      data-testid={`delete-${index}`} key={index}
                      onClick={() => {
                        dispatch(removeArtikel(item));
                      }}
                      size="small"
                      label={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 18 18"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>}
                    >
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>
      }
    </div>
  );
}
