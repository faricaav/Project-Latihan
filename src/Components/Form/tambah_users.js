import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createUsers} from "../../Store/users";
import { Button } from "../../stories/Button";

export default function AddUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    const newUsers = {
      id,
      name,
      email,
      username,
      password,
    };

    dispatch(createUsers(newUsers));

    setId("");
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");

    navigate("/users");

    console.log(newUsers);
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
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">ID</label>
            <input
              type="text"
              name="id"
              role="input-id"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Name</label>
            <input
              type="text"
              name="name"
              role="input-name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Password</label>
            <input
              type="password"
              name="password"
              role="input-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
