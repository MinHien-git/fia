import axiosClient from "./axiosClient";

type GetUsersResponse = {
  data: any;
  status: string;
};
const agencyApi = {
  getAll: (params) => {
    const url = "/agency";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/agency/${id}`;
    return axiosClient.get(url);
  },
};

export default agencyApi;
