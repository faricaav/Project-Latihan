import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createUsers} from "../../Store/users";
import { Button } from "../../stories/Button";

export default function AddUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialUsersState = {
    name: "",
    username: "",
    email: "",
    phone: ""
  };
  const [users, setUsers] = useState(initialUsersState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
  };

  const saveUsers = () => {
    console.log("coba", users)

    const { name, username, email, phone } = users;
    console.log("tes", users.name)

    // setUsers({
    //     name: data.name,
    //     username: data.username,
    //     email: data.email,
    //     phone: data.phone
    // });

    dispatch(createUsers({name, username, email, phone }))
      .unwrap()
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
      navigate("/users")
  };

  return (
    <div
      className="mt-5 col-sm-8"
      style={{ paddingLeft: "10%", paddingTop: "30px" }}
    >
      <div className="card px-3 pt-2 pb-1 shadow p-2 mt-1 rounded">
        <h5>
          <b>Tambah Users</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={saveUsers}>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Name</label>
            <input
              type="text"
              name="name"
              role="input-name"
              className="form-control"
              value={users.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Username</label>
            <input
              type="text"
              name="username"
              role="input-username"
              className="form-control"
              value={users.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Email</label>
            <input
              type="text"
              name="email"
              role="input-email"
              className="form-control"
              value={users.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Phone</label>
            <input
              type="text"
              name="phone"
              role="input-phone"
              className="form-control"
              value={users.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <br/>
          <br/>
          <Button type="submit" primary={true} label="Submit">
          </Button>
          <Link to={"/users"}>
            <Button type="submit" danger={true} label="Cancel"></Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
