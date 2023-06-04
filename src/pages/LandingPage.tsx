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
import {
  faSearch,
  faLocationCrosshairs,
  faCheck,
  faBell,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

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
        <img className="wave bottom" src="./blob-3.svg" alt="blob-3" />
      </Section>
      <Section className="landing-page-primary-resources">
        <h2 className="deep-blue-clrs">What We Can Do For You</h2>
        <p className="grey-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          sapien eu ipsum ornare{" "}
        </p>
        <div className="card-container flex">
          <Card
            icon={faCheck}
            title="Find you a Agency fit for your need."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faSearch}
            title="Hit the spot with Post your Project"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faLocationCrosshairs}
            title="Direct Access to an Agency"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
        </div>
      </Section>
      <Section className="landing-page-primary-customer">
        <img className="wave" src="./blob-4.svg" alt="blob-3" />
        <h2 className="deep-blue-clrs">Let us join your business journey!</h2>
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
          <Card
            icon={faChildReaching}
            title="Reach your potential customer"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faBell}
            title="Get notification for suitable project"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faSearch}
            title="Find yourself a agency to working with."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
        </div>
      </Section>
      <Section className="landing-page-primary-customer">
        <img className="wave bottom" src="./blob-2.svg" alt="blob" />
        <h2 className="deep-blue-clrs">
          Let us growth with your agency business
        </h2>
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
          <Card
            icon={faSearch}
            title="Direct Access to an Agency"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faSearch}
            title="Direct Access to an Agency"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
          <Card
            icon={faSearch}
            title="Direct Access to an Agency"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci."
          />
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
        <h2 className="deep-blue-clrs">About Us</h2>
        <img className="wave" src="./blob-1.svg" alt="blob" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          dolorum aspernatur recusandae, deleniti amet quo nemo ab assumenda
          quisquam quam.
        </p>
      </Section>
    </ContentSection>
  );
}
