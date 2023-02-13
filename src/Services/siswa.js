import http from "./http-all";

const getAll = () => {
  return http.get("/siswa");
};

const get = nis => {
  return http.get(`/siswa/${nis}`);
};

const create = data => {
  return http.post("/siswa", data);
};

const update = (nis, data) => {
  return http.put(`/siswa/${nis}`, data);
};

const remove = nis => {
  return http.delete(`/siswa/${nis}`);
};

const SiswaService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default SiswaService;