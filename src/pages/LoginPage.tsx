import Section from "../components/Section/Section";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import { AuthContext } from "../context/authenticateContext";
import {
  AuthContextType,
  Request_Interface,
  User_Interface,
} from "@/interfaces/app_interfaces";
import { debug } from "console";
import useScrollToTop from "../hook/useScrollToTop";
import { redirect, useNavigate } from "react-router-dom";
import Notification from "../components/Card/Notification";
import Loader from "../components/Loader/Loader";
import InputField from "../components/InputForm/InputField";
import useSetTitle from "../hook/useSetTitle";

export default function LoginPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  const { auth, login } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  let [notification, setNotification] = useState(<></>);
  let [load, setLoader] = useState(<></>);

  useScrollToTop(0, 0);

  useSetTitle("Fya | Login");
  useEffect(() => {
    clearNavbarBlock();
  }, []);

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      setLoader(Loader);
      const request = axiosClient.post<any, Request_Interface>(`/login`, {
        email: email,
        password: password,
      });
      request.then((result) => {
        const {
          success,
          message,
          response_status,
          data,
          pagination,
        }: Request_Interface = result;

        setNotification(
          <Notification
            message={
              success
                ? "Login successfully"
                : "Login fail,please check your email and password"
            }
            status={success ? "success" : "fail"}
          />
        );

        if (data && success) {
          login(data);
          return navigate("/");
        }
        setLoader(<></>);
      });
    }
    if (email && password) postData();
  };

  const handleName: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      {load}
      <ContentSection className="primary-login">
        <Section className="login-page-primary">
          {notification}
          <h1 className="deep-blue-clrs">Login</h1>
          <hr />
          <div className="login-container-section flex">
            <form className="login-form-section flex" onSubmit={handleSubmit}>
              {/* <div className="grid input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="email"
                  autoComplete="on"
                  onChange={handleName}
                  required
                />
                <label htmlFor="name">email</label>
              </div> */}
              <InputField
                type="text"
                id="name"
                label="name"
                formEvent={handleName}
              />
              <InputField
                type="password"
                id="password"
                label="password"
                formEvent={handlePassword}
              />
              <ButtonSubmitForm button_string="login" />
            </form>
            <p>
              Don't have account yet?
              <Link to="/register">register</Link>
            </p>
          </div>
        </Section>
      </ContentSection>
    </>
  );
}
