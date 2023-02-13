import http from "./http-all";

const getAll = () => {
  return http.get("/users");
};

const get = _id => {
  return http.get(`/users/${_id}`);
};

const create = data => {
  return http.post("/users", data);
};

const update = (_id, data) => {
  return http.put(`/users/${_id}`, data);
};

const remove = _id => {
  return http.delete(`/users/${_id}`);
};

const UsersService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default UsersService;