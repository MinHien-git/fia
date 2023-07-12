import axiosClient from "./axiosClient";
var agencyApi = {
    getAll: function (params) {
        var url = "/agency";
        return axiosClient.get(url, { params: params });
    },
    get: function (id) {
        var url = "/agency/".concat(id);
        return axiosClient.get(url);
    },
};
export default agencyApi;
//# sourceMappingURL=agencies.js.map