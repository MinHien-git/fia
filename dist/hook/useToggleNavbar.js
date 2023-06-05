import { useRef } from "react";
//* const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
var useToggleNavbar = function () {
    var scroll = useRef(false);
    var navbarBlock = function () {
        if (typeof document === "undefined")
            return;
        var html = document.documentElement;
        var body = document.body;
        var nav = document.getElementById("primary-navigation-bar");
        nav === null || nav === void 0 ? void 0 : nav.classList.add("active");
    };
    var clearNavbarBlock = function () {
        if (typeof document === "undefined")
            return;
        var html = document.documentElement;
        var body = document.body;
        var nav = document.getElementById("primary-navigation-bar");
        nav === null || nav === void 0 ? void 0 : nav.classList.remove("active");
    };
    return [navbarBlock, clearNavbarBlock];
};
export { useToggleNavbar };
//# sourceMappingURL=useToggleNavbar.js.map