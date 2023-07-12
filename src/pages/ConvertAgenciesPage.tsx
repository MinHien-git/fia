import React, { useEffect, useState, useContext } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import {
  Request_Interface,
  ServerResponse,
} from "../interfaces/app_interfaces";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import "./ConvertAgencyPage.scss";
import InputField from "../components/InputForm/InputField";
import Tag from "../components/Tag/tag";
import "./ConvertAgencyPage.scss";
import TextAreaField from "../components/InputForm/TextAreaField";
import { AuthContext } from "../context/authenticateContext";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContextType } from "@/interfaces/app_interfaces";
import Loader from "../components/Loader/Loader";

export default function ConvertToAgenciesPage() {
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  let [currentPage, setCurrentPage] = useState<number>(0);
  const pageLimit = 4;
  const height = window.screen.height;
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext) as AuthContextType;
  let [load, setLoader] = useState(<></>);

  useScrollToTop(0, 0);
  clearNavbarBlock();

  useEffect(() => {
    if (!auth) {
      return navigate("/");
    }
  }, [currentPage]);
  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      setLoader(Loader);
      const request = axiosClient.post<any, Request_Interface>(
        `/business/${auth?._id}`,
        {}
      );
      request.then((result) => {
        const { success, message, data } = result;
        if (success && data) {
          setLoader(<></>);
          login(data);
          return navigate(`/business/${auth?._id}`);
        }
      });
      setLoader(<></>);
    }
    postData();
  };

  return (
    <ContentSection className="business-page-primary relative">
      <Section className="business-page-start-section">
        <img className="wave" src="./wave.svg" alt="wave" />
        <h2>Confirmation</h2>
        <p>
          We will send you confirmation request via email, Please check and read
          ours term of argree
        </p>
        <form className="form-section-button-container" onSubmit={handleSubmit}>
          <button
            id="postproject-next-btn"
            className="btn deep-blue-bg white-clrs w100"
          >
            Send request
          </button>
        </form>
      </Section>
    </ContentSection>
  );
}
