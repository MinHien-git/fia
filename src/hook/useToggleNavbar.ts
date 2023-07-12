import { useRef } from "react";
//* const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
const useToggleNavbar = () => {
  const scroll = useRef(false);

  const navbarBlock = () => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const { body } = document;

    const nav = document.getElementById("primary-navigation-bar");
    nav?.classList.add("active");
  };

  const clearNavbarBlock = () => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const { body } = document;

    const nav = document.getElementById("primary-navigation-bar");
    nav?.classList.remove("active");
  };

  return [navbarBlock, clearNavbarBlock];
};

export { useToggleNavbar };
