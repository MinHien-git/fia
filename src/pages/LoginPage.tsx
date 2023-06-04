import Section from "../components/Section/Section";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";

export default function LoginPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();

  useEffect(() => {
    clearNavbarBlock();
  }, []);

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    // console.log(`called ${email} ${password}`);
    e.preventDefault();
    async function postData() {
      const request = axiosClient.post(`/login`, {
        email: email,
        password: password,
      });
      console.log(request);
    }
    postData();
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
      <ContentSection className="primary-login">
        <Section className="login-page-primary">
          <h1 className="deep-blue-clrs">Login</h1>
          <hr />
          <div className="login-container-section flex">
            <form className="login-form-section flex" onSubmit={handleSubmit}>
              <div className="grid input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="email"
                  autoComplete="on"
                  onChange={handleName}
                />
                <label htmlFor="name">email</label>
              </div>
              <div className="grid input-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  autoComplete="on"
                  onChange={handlePassword}
                />
                <label htmlFor="password">password</label>
              </div>
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
