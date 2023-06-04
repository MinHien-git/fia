import Section from "../components/Section/Section";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import ContentSection from "../components/ContentSection/ContentSection";
import ButtonSubmitForm from "../components/Button/ButtonSumitForm";
import axiosClient from "../api/axiosClient";
import { useToggleNavbar } from "../hook/useToggleNavbar";

export default function RegisterPage() {
  const [name, setName] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [city, setCity] = useState<String>("");

  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();

  useEffect(() => {
    clearNavbarBlock();
  }, []);

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      const request = await axiosClient.post(`/signup/agencies`, {
        name: name,
        email: email,
        password: password,
        location: city,
        convertToAgencies: true,
      });
      let { data, success }: any = request;
      console.log(request);
      console.log(data, success);
    }
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
      <ContentSection className="primary-register">
        <Section className="register-page-primary">
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
                />
                <label htmlFor="password">password</label>
              </div>
              <div className="grid input-container">
                <input
                  id="city"
                  name="city"
                  placeholder="city"
                  onChange={handleCity}
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
