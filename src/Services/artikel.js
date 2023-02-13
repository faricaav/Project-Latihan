import http from "./http-all";

const getAll = () => {
  return http.get("/artikel");
};

const get = _id => {
  return http.get(`/artikel/${_id}`);
};

const create = data => {
  return http.post("/artikel", data);
};

const update = (_id, data) => {
  return http.put(`/artikel/${_id}`, data);
};

const remove = _id => {
  return http.delete(`/artikel/${_id}`);
};

const ArtikelService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default ArtikelService;