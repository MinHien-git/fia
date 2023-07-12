import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import React, { useState, useEffect, useContext } from "react";
import "./BusinessWorkSpace.scss";
import axiosClient from "../api/axiosClient";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../context/authenticateContext";
import {
  AuthContextType,
  Get_Interface,
  Request_Interface,
} from "../interfaces/app_interfaces";
import { Link, useNavigate } from "react-router-dom";
import PageCard from "./PageCard";
import useScrollToTop from "../hook/useScrollToTop";

export default function BusinessWorkSpace() {
  const [pages, setPages] = useState<Array<any>>([]);
  let [load, setLoader] = useState(<></>);
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext) as AuthContextType;

  useScrollToTop(0, 0);
  useEffect(() => {
    async function postData() {
      setLoader(Loader);
      const request = axiosClient.get<any, any>(
        `/business/${auth?._id}/workspaces`,
        {}
      );
      request.then((result) => {
        const {
          success,
          message,
          response_status,
          data,
          pagination,
        }: Get_Interface = result;
        if (data) {
          let { page } = data[0];
          setPages(page);
        }
        if (success) {
          setLoader(<></>);
        }
      });
      setLoader(<></>);
    }
    if (auth) {
      postData();
    } else {
      navigate("/");
    }
  }, []);
  return (
    <ContentSection>
      <Section className="business-pages-section">
        <h2>welcome to workspace</h2>
        <div className="form-section-button-container">
          {pages.length === 0 ? (
            <>
              <p>You don't have any page in your workspace</p>
              <Link
                to={`/business/${auth?._id}/create-page`}
                id="postproject-next-btn"
                className="btn deep-blue-bg white-clrs"
                relative="route"
              >
                Create page
              </Link>
            </>
          ) : (
            <>
              <p>You have {pages.length} in your workspace</p>
              <div className="all-page-container">
                <div className="pages-container center flex">
                  {pages.map((v) => (
                    <PageCard
                      id={v._id}
                      title={v.title}
                      tag={v.tags}
                      desc={v.description}
                    />
                  ))}
                </div>
              </div>
              <Link
                to={`/business/${auth?._id}/create-page`}
                id="postproject-next-btn"
                className="btn deep-blue-bg white-clrs"
                relative="route"
              >
                Add pages
              </Link>
            </>
          )}
        </div>
      </Section>
    </ContentSection>
  );
}
