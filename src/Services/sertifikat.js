import http from "./http-all";

const getAll = nis => {
  return http.get(`/sertifikat/siswa/${nis}`);
};

const get = id => {
  return http.get(`/sertifikat/${id}`);
};

const create = data => {
  return http.post(`/sertifikat`, data);
};

const update = (id, data) => {
  return http.put(`/sertifikat/${id}`, data);
};

const remove = id => {
  return http.delete(`/sertifikat/${id}`);
};

const SertifikatService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default SertifikatService;