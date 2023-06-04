import ButtonPopupComponent from "../components/Button/ButtonPopup";
import ContentSection from "../components/ContentSection/ContentSection";
import Section from "../components/Section/Section";
import React, { useEffect, useState } from "react";
import { size } from "../constants/components";
import useScrollToTop from "../hook/useScrollToTop";
import ContactAgency from "../components/Forms/ContactAgency";
import "./AgencyPage.scss";
import ButtonComponent from "../components/Button/ButtonComponent";
import ServiceCards from "../components/Card/ServiceCard";
import PorfolioCard from "../components/Card/PorfolioCard";
import AgencySuggestionCard from "../components/Card/AgencySuggestionCard";
import ReviewFeedbackCard from "../components/Card/ReviewFeedbackCard";
import { AgencyPage_Type, ServerResponse } from "../interfaces/app_interfaces";
import axiosClient from "../api/axiosClient";
import { useParams, useSearchParams } from "react-router-dom";

export default function AgencyPage() {
  const { id } = useParams();
  const [pageInformation, setPageInformation] = useState<AgencyPage_Type>({});
  useScrollToTop(0, 0);
  useEffect(() => {
    console.log(id);
    async function fetchData() {
      const request = await axiosClient.get<ServerResponse>(`/agency/${id}`);
      console.log(request);
      setPageInformation(request.data[0]);
      // setAgencies(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <ContentSection className="agency-page">
        <Section className="agency-page-detail">
          <div className="agency-profile-container">
            <div id="agencies-profile-image" className="relative">
              <div id="cover-page"></div>
              <div id="profile-image"></div>
            </div>
            <div className="agency-profile-information-container">
              <div className="agency-profile-basic-information">
                <h2>{pageInformation.page_title}</h2>
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
          <ButtonComponent button_string="Contact ABC agency" />
        </Section>
        <Section className="agency-service-offers">
          <h3>Services</h3>
          <div className="service-offer-container">
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
          </div>
        </Section>
        <Section className="portfolio-section">
          <h3>Portfolio:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              <PorfolioCard />
              <PorfolioCard />
              <PorfolioCard />
              <PorfolioCard />
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
      <ButtonPopupComponent
        className="sticky"
        button_string="Contact us"
        button_size={size.LARGE}
        popUp={<ContactAgency />}
        id="agency-contact"
      />
    </>
  );
}
