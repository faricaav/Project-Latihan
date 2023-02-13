import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { putUsers } from "../../Store/users";
import UsersService from "../../Services/users";
import { Button } from "../../stories/Button";

export default function UpdateUsers() {
  const {_id} = useParams();
  console.log(_id)
  let navigate = useNavigate();

  const initialUsersState = {
    _id: 0,
    name: "",
    username: "",
    email: "",
    password: ""
  };
  const [currentUsers, setCurrentUsers] = useState(initialUsersState);

  const dispatch = useDispatch();

  const getUsers = _id => {
    UsersService.get(_id)
      .then(response => {
        setCurrentUsers(response.data);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (_id)
      getUsers(_id);
  }, [_id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUsers({ ...currentUsers, [name]: value });
  };

  const updateUsers = () => {
    console.log("tes", currentUsers)
    dispatch(putUsers({ _id: currentUsers._id, data: currentUsers }))
      .unwrap()
      .then(response => {
        console.log(response);
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
          <b>Edit Users</b>
        </h5>
      </div>
      <div className="card mt-3 px-5 pt-5 pb-5 shadow p-2 mb-1 mt-1 rounded">
        <form onSubmit={updateUsers}>
        <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={currentUsers.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={currentUsers.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={currentUsers.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label mt-2">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={currentUsers.password}
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
