import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSiswa } from "../Store/siswa";

export default function List() {
  const dispatch = useDispatch();
  const siswa = useSelector((state) => state.siswa.siswa);
  
  return (
    <div
      className="container my-n5 mt-5"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <b>
        <h4 align="left">List Siswa</h4>
      </b>
      <br />
      <Link to={`/addSiswa`}>
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
            class="bi bi-plus-circle"
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
      <ul className="list-group ">
        <table class="table table-bordered shadow p-2 mb-1 bg-white rounded">
          <thead>
            <tr align="center">
              <th scope="col">NIS</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Jurusan</th>
              <th scope="col">Sertifikat</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((item, index) => {
              return (
                <tr align="center">
                  <td>{item.nis}</td>
                  <td>{item.nama}</td>
                  <td>{item.alamat}</td>
                  <td>{item.jurusan}</td>
                  <td>
                    {item.sertifikat === "true" && "Ada"}
                    {item.sertifikat === "false" && "Tidak Ada"}
                  </td>
                  <td>
				  	<Link to={`/gallery/${item.nis}`}>
                    <button
                      className="btn btn-sm btn-warning m-1"
                      data-toggle="modal"
                      data-target="#modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-three-dots"
                        viewBox="0 0 18 18"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
					</Link>
                    <Link to={`/updateSiswa/${item.nis}`}>
                      <button
                        className="btn btn-sm btn-primary m-1"
                        data-toggle="modal"
                        data-target="#modal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 18 18"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger m-1"
                      onClick={() => {
                        dispatch(deleteSiswa(item.nis));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 18 18"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>
    </div>
  );
}
