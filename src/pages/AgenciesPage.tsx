import React, { useEffect, useState, useContext } from "react";
import Section from "../components/Section/Section";
import { useSearchParams } from "react-router-dom";
import Tag from "../components/Tag/tag";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import AgencyCard from "../components/Card/AgencyCard";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import { ServerResponse } from "../interfaces/app_interfaces";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
import { SearchContext } from "../context/searchContext";
import {
  SearchContextType,
  Search_Interface,
} from "../interfaces/app_interfaces";

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState<any>([]);
  const [location, setLocation] = useState<string | undefined>();
  const [tags, setTags] = useState<Array<string>>([]);
  const { search } = useContext(SearchContext) as SearchContextType;
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();

  useScrollToTop(0, 0);
  useSetTitle("Fya | Find Agencies");
  useEffect(() => {
    clearNavbarBlock();
    if (search) {
      setLocation(search.location);
      setTags(search.tags);
    }
    async function fetchData() {
      const request = await axiosClient.get<ServerResponse>("/agency", {});
      let { data, success }: any = request;
      setAgencies(data);
      // setAgencies(result);
    }
    fetchData();
  }, []);
  useEffect(() => {
    tags.forEach((e) => {
      const tagInput = document.getElementById(e) as HTMLInputElement;
      if (tagInput) tagInput.checked = true;
    });
  }, [tags]);
  const handleService = (value: string) => {
    if (tags)
      if (tags.includes(value)) {
        setTags((cur) => cur.filter((v) => v !== value));
      } else {
        setTags((cur) => [...cur, value]);
      }
  };

  return (
    <>
      <Section className="agencies-page-primary">
        <h1>Here's some of agencies</h1>
        <hr />
      </Section>
      <form className="form-section-search flex relative" id="filter-section">
        <label className="relative" htmlFor="location">
          <input
            placeholder="Location"
            id="location"
            name="location"
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
                isChecked={tags.includes("BM")}
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
          </div>
          <span></span>
        </label>
        {/* <ButtonSubmitForm button_string="Search Agencies"></ButtonSubmitForm> */}
      </form>
      <Section className="agency-result">
        <ul className="agencies-container flex">
          {agencies
            ?.filter((v) =>
              location !== "" && tags.length > 0
                ? v.location?.toLowerCase() === location?.toLowerCase() &&
                  tags?.every((e) => v.tags.includes(e))
                : location === ""
                ? tags.length > 0
                  ? tags?.every((e) => v.tags.includes(e))
                  : v
                : v.location?.toLowerCase() === location?.toLowerCase()
            )
            .map(function (v) {
              let { tags, name, description, _id }: any = v;
              return (
                <AgencyCard
                  key={_id}
                  id={_id}
                  title={name}
                  tag={tags}
                  desc={description}
                />
              );

              return null;
            })}
        </ul>
        <br />
        <div></div>
      </Section>
    </>
  );
}
