import React, { useEffect, useState } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import { ServerResponse } from "../interfaces/app_interfaces";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import "./ConvertAgencyPage.scss";
import InputField from "../components/InputForm/InputField";
import Tag from "../components/Tag/tag";
export default function ConvertToAgenciesPage() {
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  useScrollToTop(0, 0);
  useEffect(() => {
    clearNavbarBlock();
  }, []);
  return (
    <ContentSection className="business-page-primary relative">
      <Section className="business-page-start-section">
        <img className="wave" src="./wave.svg" alt="wave" />

        <h2>Please fill out the form of your business</h2>
        <div className="form-section-button-container">
          <div
            id="postproject-next-btn"
            className="btn deep-blue-bg white-clrs w100"
          >
            Let's start
          </div>
        </div>
      </Section>
      <Section className="business-page-infomation-section">
        <h2>Your business infomation</h2>
        <div className="form-section-button-container">
          <InputField id="name" label="company name" />
        </div>
        <p>Which fields do you want to provide?</p>
        <ul className="tags-container flex">
          <Tag tag_value="Brand Management" tag_id="BM" name="services" />
          <Tag tag_value="Media Relations" tag_id="MR" name="services" />
          <Tag
            tag_value="Social media management"
            tag_id="SMM"
            name="services"
          />
          <Tag tag_value="Outreach" tag_id="OR" name="services" />
          <Tag tag_value="Market Research" tag_id="MR" name="services" />
          <Tag tag_value="Event Planning" tag_id="EP" name="services" />
          <Tag tag_value="Communication Training" tag_id="CT" name="services" />
          <Tag tag_value="Write internal ads" tag_id="WIA" name="services" />
          <Tag tag_value="Content Marketing" tag_id="CM" name="services" />
          <Tag tag_value="Print Ads" tag_id="PA" name="services" />
          <Tag tag_value="TVC" tag_id="TVC" name="services" />
          <Tag tag_value="FB & CC MARKETING" tag_id="FBC" name="services" />
        </ul>
      </Section>
    </ContentSection>
  );
}
