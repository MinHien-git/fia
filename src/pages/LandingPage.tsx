import React from "react";

import Section from "../components/Section/Section";
import ButtonPopupComponent from "../components/Button/ButtonPopup";
import SearchAgencyForm from "../components/Forms/SearchAgencyForm";
import PostProjectForm from "../components/Forms/PostProjectForm";
import Card from "../components/Card/Card";
import ContentSection from "../components/ContentSection/ContentSection";
import useScrollToTop from "../hook/useScrollToTop";
import ButtonComponent from "../components/Button/ButtonComponent";
import VerticalCard from "../components/Card/VerticalCard";

export default function LandingPage() {
  useScrollToTop(0, 0);
  return (
    <ContentSection>
      <Section className="landing-page-primary">
        <img className="wave" src="./wave.svg" alt="wave" />
        <h1 className="deep-blue-clrs">FindAgencies</h1>
        <p className="bold deep-blue-clrs">
          The ultimate dating app for Clients and Agencies
        </p>
        <SearchAgencyForm />
        <span className="grey-color">or</span>
        <ButtonPopupComponent
          id="post-form-container"
          popUp={<PostProjectForm />}
          button_string="Post your Project"
        ></ButtonPopupComponent>
        <img id="contact-sgv" src="./Contact us 1.png" alt="contact-us" />
      </Section>
      <Section className="landing-page-primary-resources">
        <h2>What We Can Do For You</h2>
        <p className="grey-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          sapien eu ipsum ornare{" "}
        </p>
        <div className="card-container flex">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section className="landing-page-primary-customer">
        <h2>Let us join your business journey!</h2>
        <div className="flex">
          <ButtonComponent button_string="SearchAgencies" />
          <span>or</span>
          <ButtonPopupComponent
            id="post-form-container"
            popUp={<PostProjectForm />}
            button_string="Post your Project"
          ></ButtonPopupComponent>
        </div>
      </Section>
      <Section className="landing-page-primary-resources">
        <h2>Join the community of agencies</h2>
        <p className="grey-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          sapien eu ipsum ornare{" "}
        </p>
        <div className="card-container flex">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section className="landing-page-primary-customer">
        <h2>Let us growth with your agency business</h2>
        <div className="flex">
          <ButtonComponent button_string="Create Profile" />
          <span>or</span>
          <ButtonPopupComponent
            id="post-form-container"
            popUp={<PostProjectForm />}
            button_string="Learn more"
          ></ButtonPopupComponent>
        </div>
      </Section>
      <Section className="landing-page-primary-resources">
        <h2>Our Resources</h2>
        <p className="grey-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          sapien eu ipsum ornare{" "}
        </p>
        <div className="card-container flex">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section className="landing-page-primary-resources">
        <div className="vert-card-container flex">
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
      </Section>
      <Section className="landing-page-primary-customer">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          dolorum aspernatur recusandae, deleniti amet quo nemo ab assumenda
          quisquam quam.
        </p>
      </Section>
    </ContentSection>
  );
}
