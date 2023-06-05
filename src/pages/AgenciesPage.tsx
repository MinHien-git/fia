import React, { useEffect, useState } from "react";
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

export default function AgenciesPage() {
  const [searchParams] = useSearchParams();
  const [agencies, setAgencies] = useState<any>([]);
  const [location, setLocation] = useState(searchParams.get("location"));
  const [services, setServices] = useState(
    searchParams.get("service")?.split(",")
  );
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  useScrollToTop(0, 0);
  useSetTitle("Fya | Find Agencies");
  useEffect(() => {
    HandleTag();
    clearNavbarBlock();
    async function fetchData() {
      const request = await axiosClient.get<ServerResponse>("/agency");
      console.log(request);
      let { data, success }: any = request;
      setAgencies(data);
      console.log(success);
      // setAgencies(result);
    }
    fetchData();
  }, []);

  const HandleTag = () => {
    services?.forEach((v) => {
      const tag = document.getElementById(`${v}`) as HTMLInputElement | null;
      if (tag) tag.checked = true;
    });
  };

  return (
    <>
      <Section className="agencies-page-primary">
        <h1>Here's some of agencies</h1>
        <hr />
      </Section>
      <form className="form-section-search flex relative" id="filter-section">
        <label className="relative" htmlFor="location">
          <input placeholder="Location" id="location" name="location" />
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
              <Tag tag_value="Advertise" tag_id="AT" name="services" />

              <Tag tag_value="Event Planning" tag_id="EP" name="services" />

              <Tag tag_value="Market Research" tag_id="MR" name="services" />

              <Tag tag_value="Freelancer" tag_id="FL" name="services" />
            </ul>
            <hr />
          </div>
          <span></span>
        </label>
        {/* <ButtonSubmitForm button_string="Search Agencies"></ButtonSubmitForm> */}
      </form>
      <Section className="agency-result">
        <ul className="agencies-container flex">
          {agencies.map(function (v) {
            if (v.page?.length > 0) {
              let { tags, header, content, _id }: any = v.page[0];
              return (
                <AgencyCard id={_id} title={header} tag={tags} desc={content} />
              );
            }
            return null;
          })}
        </ul>
        <br />
        <div></div>
      </Section>
    </>
  );
}
