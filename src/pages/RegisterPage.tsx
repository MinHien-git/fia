import Section from "../components/Section/Section";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useScrollToTop from "../hook/useScrollToTop";
import { redirect, useNavigate } from "react-router-dom";
import Notification from "../components/Card/Notification";
import Loader from "../components/Loader/Loader";
import {
  Request_Interface,
  AuthContextType,
} from "@/interfaces/app_interfaces";
import { AuthContext } from "../context/authenticateContext";

export default function RegisterPage() {
  const [name, setName] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [city, setCity] = useState<String>("");
  let [load, setLoader] = useState(<></>);
  const navigate = useNavigate();
  let [notification, setNotification] = useState(<></>);
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  const { auth, login } = useContext(AuthContext) as AuthContextType;

  useScrollToTop(0, 0);
  useEffect(() => {
    clearNavbarBlock();
  }, []);

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      setLoader(Loader);
      const request = axiosClient.post<any, Request_Interface>(
        `/signup/agencies`,
        {
          name: name,
          email: email,
          password: password,
          location: city,
          convertToAgencies: true,
        }
      );
      request.then((result) => {
        const { success, message } = result;
        setNotification(
          <Notification
            message={
              success
                ? "Resgister successfully"
                : "Resgister fail,please check your email and password"
            }
            status={success ? "success" : "fail"}
          />
        );
        if (success) {
          const login_request = axiosClient.post<any, Request_Interface>(
            `/login`,
            {
              email: email,
              password: password,
            }
          );
          request.then((result) => {
            const {
              success,
              message,
              response_status,
              data,
              pagination,
            }: Request_Interface = result;
            console.log(result);
            if (data && success) {
              login(data);
              return navigate("/");
            }
          });
          return navigate("/");
        }
      });
      setLoader(<></>);
    }
    console.log("submit");
    postData();
  };
  const handleEmail: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handleName: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setName(e.currentTarget.value);
  };

  const handleCity: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setCity(e.currentTarget.value);
  };

  const handlePassword: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <>
      {load}
      <ContentSection className="primary-register">
        <Section className="register-page-primary">
          {notification}
          <h1 className="deep-blue-clrs">Register</h1>
          <hr />
          <div className="register-container-section flex">
            <form className="login-form-section flex" onSubmit={handleSubmit}>
              <div className="grid input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  onChange={handleName}
                  required
                />
                <label htmlFor="name">name</label>
              </div>
              <div className="grid input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  onChange={handleEmail}
                  required
                />
                <label htmlFor="email">email</label>
              </div>
              <div className="grid input-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  onChange={handlePassword}
                  required
                />
                <label htmlFor="password">password</label>
              </div>
              <div className="grid input-container">
                <input
                  id="city"
                  name="city"
                  placeholder="city"
                  onChange={handleCity}
                  required
                />
                <label htmlFor="city">city</label>
              </div>
              <ButtonSubmitForm button_string="register" />
            </form>
            <p>
              Already have account?
              <Link to="/login">login</Link>
            </p>
          </div>
        </Section>
      </ContentSection>
    </>
  );
}
