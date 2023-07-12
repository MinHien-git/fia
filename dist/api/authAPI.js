import axiosClient from "./axiosClient";
var authService = {
    logout: function () { return axiosClient.patch("auth/logout"); },
    login: function (data) { return axiosClient.post("auth/login", data); },
    register: function (data) { return axiosClient.post("auth/register", data); },
};
export default authService;
//# sourceMappingURL=authAPI.js.map