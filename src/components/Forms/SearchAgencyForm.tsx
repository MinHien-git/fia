import React, { useState, useEffect } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect, useNavigate } from "react-router-dom";
import Tag from "../Tag/tag";
import { useScrollBlock } from "../../hook/useStopScroll";
import clsx from "clsx";

export default function SearchAgencyForm() {
  const [location, setLocation] = useState("");
  const [service, setService] = useState<Array<String>>([]);
  const [allowScroll, blockScroll] = useScrollBlock();
  const navigate = useNavigate();

  const handleLocation = (e: React.FormEvent<HTMLInputElement>) => {
    setLocation(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(service);
  }, [service]);

  const handleService = (value: string) => {
    console.log("Call");
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
    return navigate(`/agency?location=${location}&service=${service}`);
  };
  return (
    <form className="form-section-search flex relative" onSubmit={handleSubmit}>
      <label className="relative" htmlFor="location">
        <input
          placeholder="Location"
          id="location"
          name="location"
          onChange={handleLocation}
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
          <ul className="flex">
            <Tag
              tag_value="Advertise"
              tag_id="ATS"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("AT");
              }}
            />

            <Tag
              tag_value="Event Planning"
              tag_id="EPS"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("EP");
              }}
            />

            <Tag
              tag_value="Market Research"
              tag_id="MRS"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("MR");
              }}
            />

            <Tag
              tag_value="Freelancer"
              tag_id="FLS"
              name="services"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("FL");
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
