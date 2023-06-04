import "./Form.scss";
import Tag from "../Tag/tag";
import React, { useState, useEffect } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import InputField from "../InputForm/InputField";
import DoubleSlider from "../InputForm/DoubleSlider";

export default function PostProjectForm() {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = 5;

  useEffect(() => {
    console.log(currentPage);
    const newPage = document.getElementById("post-section-" + currentPage);
    newPage?.classList.add("active");
  }, [currentPage]);

  const NextPage = () => {
    if (currentPage < maxPage - 1) {
      const oldPage = document.getElementById("post-section-" + currentPage);
      oldPage?.classList.remove("active");
      setCurrentPage(currentPage + 1);
    }
  };

  const PreviousPage = () => {
    if (currentPage > 0) {
      const oldPage = document.getElementById("post-section-" + currentPage);
      oldPage?.classList.remove("active");
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <form className="form-section flex relative">
      <div className="section-container flex">
        <section className="flex active" id="post-section-0">
          <h2 className="text-center logo">Fya</h2>
          <div className="tags-container flex">
            <p className="text-center">
              Please fill out the form so we can find the right agencies for
              your need
            </p>
          </div>
        </section>
        <section className="flex" id="post-section-1">
          <h3>What service do you need</h3>
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
            <Tag
              tag_value="Communication Training"
              tag_id="CT"
              name="services"
            />
            <Tag tag_value="Write internal ads" tag_id="WIA" name="services" />
            <Tag tag_value="Content Marketing" tag_id="CM" name="services" />
            <Tag tag_value="Print Ads" tag_id="PA" name="services" />
            <Tag tag_value="TVC" tag_id="TVC" name="services" />
            <Tag tag_value="FB & CC MARKETING" tag_id="FBC" name="services" />
          </ul>
        </section>
        <section className="flex" id="post-section-2">
          <h3>Which location of Agency do you want to work with?</h3>
          <InputField id="location" label="location" />
        </section>
        <section className="flex" id="post-section-3">
          <h3>Which size of agencies would you prefer?</h3>
          <div className="ratio-input-container">
            <div className="ratio-input">
              <input type="radio" id="small" name="size" value="small" /> 
              <label htmlFor="small">Small agencies (1-10)</label>
            </div>
            <div className="ratio-input">
              <input type="radio" id="medium" name="size" value="medium" /> 
              <label htmlFor="medium">Medium agencies (11-50)</label>
            </div>
            <div className="ratio-input">
              <input type="radio" id="large" name="size" value="large" /> 
              <label htmlFor="large">Large agencies (51+)</label>
            </div>
            <div className="ratio-input">
              <input type="radio" id="none" name="size" value="none" /> 
              <label htmlFor="none">I don't care</label>
            </div>
          </div>
        </section>
        <section className="flex" id="post-section-4">
          <h3>What range of budget do you want to find?</h3>
          <DoubleSlider />
        </section>
      </div>
      {currentPage === 0 ? (
        <div className="form-section-button-container">
          <div
            id="postproject-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={NextPage}
          >
            Let's start
          </div>
        </div>
      ) : (
        <div className="form-section-button-container">
          <div
            id="postproject-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={NextPage}
          >
            next
          </div>
          <div
            id="postproject-previous-btn"
            className="btn stop"
            onClick={PreviousPage}
          >
            previous
          </div>
        </div>
      )}
    </form>
  );
}
