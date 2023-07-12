import ButtonPopupComponent from "../components/Button/ButtonPopup";
import ContentSection from "../components/ContentSection/ContentSection";
import Section from "../components/Section/Section";
import React, { useEffect, useState, useContext } from "react";
import { size } from "../constants/components";
import useScrollToTop from "../hook/useScrollToTop";
import ContactAgency from "../components/Forms/ContactAgency";
import "./AgencyPage.scss";
import ButtonComponent from "../components/Button/ButtonComponent";
import ServiceCards from "../components/Card/ServiceCard";
import PorfolioCard from "../components/Card/PorfolioCard";
import AgencySuggestionCard from "../components/Card/AgencySuggestionCard";
import ReviewFeedbackCard from "../components/Card/ReviewFeedbackCard";
import {
  AgencyPage_Type,
  AuthContextType,
  ServerResponse,
} from "../interfaces/app_interfaces";
import axiosClient from "../api/axiosClient";
import { useParams, useSearchParams } from "react-router-dom";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
import Popup from "../components/Popup/Popup";
import InputField from "../components/InputForm/InputField";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import TextAreaField from "../components/InputForm/TextAreaField";
import { AuthContext } from "./../context/authenticateContext";
import FeedbackPopup from "../components/Popup/FeedbackPopup";
import ContactPopup from "../components/Popup/ContactPopup";

export default function AgencyPage() {
  const { id } = useParams();
  const [pageInformation, setPageInformation] = useState<any>({});
  useScrollToTop(0, 0);
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  const [formPopup, setFormPopup] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<boolean>(false);
  const { auth } = useContext(AuthContext) as AuthContextType;

  useSetTitle("Fya | Agency");
  useEffect(() => {
    clearNavbarBlock();
    async function fetchData() {
      const request = await axiosClient.get<ServerResponse>(`/agency/${id}`);
      console.log(request);
      setPageInformation(request.data);
      // setAgencies(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <ContactPopup toggle={formPopup} close={() => setFormPopup(false)} />
      <FeedbackPopup toggle={feedback} close={() => setFeedback(false)} />
      <ContentSection className="agency-page">
        <Section className="agency-page-detail">
          <div className="agency-profile-container">
            <div id="agencies-profile-image" className="relative">
              <div id="cover-page"></div>
              <div id="profile-image"></div>
            </div>
            <div className="agency-profile-information-container">
              <div className="agency-profile-basic-information">
                <h2>{pageInformation.title}</h2>
                <div>
                  <p>Based in: {pageInformation.location}</p>
                  <p>Available: Nationwide</p>
                </div>
              </div>
              <hr />
              <div className="agency-start-rate-container">
                <ul className="agency-start-rate">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>0.0/5.0</p>
              </div>
            </div>
            <p>{pageInformation.content}</p>
          </div>
        </Section>
        <Section className="agency-team-infomation">
          <article>
            <p>
              Team: <span>123 People</span>
            </p>
            <p>
              Founded in: <span>2023</span>
            </p>
            <p>
              Language(S) Availiable: <span>English, Vietnamese</span>
            </p>
            <p>
              Has joined Fia since: <span>2023</span>
            </p>
          </article>
          <ButtonComponent
            button_string="Contact agency"
            onClickEvent={() => setFormPopup(true)}
          />
          <ButtonComponent
            className="tertiary"
            button_string="Write feedback"
            onClickEvent={() => setFeedback(true)}
          />
        </Section>
        <Section className="agency-service-offers">
          <h3>Services</h3>
          <div className="service-offer-container">
            {pageInformation.services?.map((v) => (
              <ServiceCards
                key={v?.id}
                id={v?.id}
                title={v.title}
                price={v.price}
              />
            ))}
          </div>
        </Section>
        <Section className="portfolio-section">
          <h3>Portfolio:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              {pageInformation.porfolio?.map((v) => (
                <PorfolioCard />
              ))}
            </div>
          </div>
        </Section>
        <Section className="portfolio-section">
          <h3>Reviews & Feedback:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
            </div>
          </div>
        </Section>
        <Section className="portfolio-section">
          <h3>Agencies Similar to ABC Agency:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              <AgencySuggestionCard />
              <AgencySuggestionCard />
              <AgencySuggestionCard />
              <AgencySuggestionCard />
            </div>
          </div>
        </Section>
      </ContentSection>
    </>
  );
}
