import React, { useState, useEffect, useContext } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect, useNavigate } from "react-router-dom";
import Tag from "../Tag/tag";
import clsx from "clsx";
import { SearchContext } from "../../context/searchContext";
import {
  SearchContextType,
  Search_Interface,
} from "../../interfaces/app_interfaces";

export default function SearchAgencyForm() {
  const [location, setLocation] = useState("");
  const [service, setService] = useState<Array<string>>([]);
  const { search, startSearch } = useContext(
    SearchContext
  ) as SearchContextType;
  const navigate = useNavigate();

  const handleLocation = (e: React.FormEvent<HTMLInputElement>) => {
    setLocation(e.currentTarget.value);
  };

  const handleService = (value: string) => {
    if (service.includes(value)) {
      setService((cur) => cur.filter((v) => v !== value));
    } else {
      setService((cur) => [...cur, value]);
    }
  };
  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    let search_param: Search_Interface = {
      location: location,
      tags: service,
    };
    startSearch(search_param);
    return navigate(`/agency`);
  };
  return (
    <form className="form-section-search flex relative" onSubmit={handleSubmit}>
      <label className="relative" htmlFor="location">
        <input
          placeholder="Location"
          id="location"
          name="location"
          onChange={handleLocation}
          value={location}
        />
        <label
          id="service-agency-search"
          className={clsx("absolute flex")}
          htmlFor="toggle"
        >
          <FontAwesomeIcon icon={faSearch} />
          Service
          <FontAwesomeIcon id="arrow" icon={faSortDown} />
        </label>
        <input type="checkbox" id="toggle" name="toggle" />
        <div id="service-section">
          <ul className="tags-container flex">
            <Tag
              tag_value="Brand Management"
              tag_id="BM"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("BM");
              }}
            />
            <Tag
              tag_value="Media Relations"
              tag_id="MRL"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("MRL");
              }}
            />
            <Tag
              tag_value="Social media management"
              tag_id="SMM"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("SMM");
              }}
            />
            <Tag
              tag_value="Outreach"
              tag_id="OR"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("OR");
              }}
            />
            <Tag
              tag_value="Market Research"
              tag_id="MR"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("MR");
              }}
            />
            <Tag
              tag_value="Event Planning"
              tag_id="EP"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("EP");
              }}
            />
            <Tag
              tag_value="Communication Training"
              tag_id="CT"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("CT");
              }}
            />
            <Tag
              tag_value="Write internal ads"
              tag_id="WIA"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("WIA");
              }}
            />
            <Tag
              tag_value="Content Marketing"
              tag_id="CM"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("CM");
              }}
            />
            <Tag
              tag_value="Print Ads"
              tag_id="PA"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("PA");
              }}
            />
            <Tag
              tag_value="TVC"
              tag_id="TVC"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("TVS");
              }}
            />
            <Tag
              tag_value="FB & CC MARKETING"
              tag_id="FBC"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("FBC");
              }}
            />
          </ul>
          <hr />
          <ButtonSubmitForm button_string="Search Agencies"></ButtonSubmitForm>
        </div>
        <span></span>
      </label>
      <ButtonSubmitForm button_string="Search Agencies"></ButtonSubmitForm>
    </form>
  );
}
