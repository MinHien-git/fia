import React, { useEffect, useState, useContext, ChangeEvent } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import axiosClient from "../api/axiosClient";
import {
  Request_Interface,
  ServerResponse,
} from "../interfaces/app_interfaces";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import Section from "../components/Section/Section";
import ContentSection from "../components/ContentSection/ContentSection";
import "./CreatePage.scss";
import InputField from "../components/InputForm/InputField";
import Tag from "../components/Tag/tag";
import TextAreaField from "../components/InputForm/TextAreaField";
import { AuthContext } from "../context/authenticateContext";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContextType } from "@/interfaces/app_interfaces";

export default function CreatePage() {
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  let [currentPage, setCurrentPage] = useState<number>(0);
  const pageLimit = 4;
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext) as AuthContextType;
  const [tags, setTags] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>("");
  const [language, setLanguge] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  // title: string;
  // name: string;
  // description: string;
  // userId: string;
  // services: Array<Service> = [];
  // tags: Array<string> = [];
  useScrollToTop(0, 0);
  clearNavbarBlock();
  const resetData = () => {
    setTags([]);
    setCurrentPage(0);
    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    if (!auth) {
      return navigate("/");
    }
    const section = document.getElementById(`business-section-${currentPage}`);
    section?.classList.add("active");
    window.scrollTo(0, 0);
  }, [currentPage]);

  const moveNextPage = () => {
    if (currentPage < pageLimit) {
      const section = document.getElementById(
        `business-section-${currentPage}`
      );
      section?.classList.remove("active");
      setCurrentPage(currentPage + 1);
    }
  };
  const onChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const onChangeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguge(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const handleService = (value: string) => {
    if (tags.includes(value)) {
      setTags((cur) => cur.filter((v) => v !== value));
    } else {
      setTags((cur) => [...cur, value]);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      let param = {
        title: title,
        name: name,
        description: description,
        language: language,
        location: location,
        _id: auth?._id,
        tags: tags,
      };

      const request = axiosClient.post<any, Request_Interface>(
        `/business/${auth?._id}/page/create`,
        param
      );
      request.then((result) => {
        const {
          success,
          message,
          response_status,
          data,
          pagination,
        }: Request_Interface = result;
        resetData();
        if (auth) return navigate(`/business/${auth._id}`);
      });
    }
    postData();
  };
  const PreviousPage = () => {
    if (currentPage > 0) {
      const oldPage = document.getElementById("post-section-" + currentPage);
      oldPage?.classList.remove("active");
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ContentSection className="business-page-primary relative">
      <Section className="business-page-start-section" id="business-section-0">
        <img className="wave" src="./wave.svg" alt="wave" />
        <h2>Please fill out the form of your business</h2>
        <div className="form-section-button-container">
          <div
            id="postproject-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={moveNextPage}
          >
            Let's start
          </div>
        </div>
      </Section>
      <Section className="business-page-tags-section" id="business-section-1">
        <h2>Your business infomation</h2>
        <div className="form-section-button-container flex">
          <InputField id="name" label="company name" formEvent={onChangeName} />
        </div>
        <div className="select-tag-container">
          <p>Which fields do you want to provide?</p>
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
        </div>
        <div className="form-section-button-container">
          <div
            id="infomation-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={moveNextPage}
          >
            Next
          </div>
        </div>
      </Section>
      <Section className="business-page-start-section" id="business-section-2">
        <img className="wave" src="./wave.svg" alt="wave" />
        <h2>Let's setup your bussiness page</h2>
        <p>fill out the form so user can easily find your bussiness</p>
        <div className="form-section-button-container">
          <div
            id="start-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={moveNextPage}
          >
            Let's start
          </div>
        </div>
      </Section>
      <Section
        className="business-page-infomation-section"
        id="business-section-3"
      >
        <h2>Write short description about your bussiness</h2>
        <TextAreaField
          id={"short-description"}
          label="short description"
          classNames="short-description-textarea"
          onChange={onChangeTitle}
        />

        <TextAreaField
          id={"description"}
          label="description"
          classNames="description-textarea"
          onChange={onChangeDescription}
        />
        <div className="form-section-button-container">
          <div
            id="description-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            onClick={moveNextPage}
          >
            Next
          </div>
        </div>
      </Section>
      <Section
        className="business-page-language-section"
        id="business-section-4"
      >
        <img className="wave" src="./wave.svg" alt="wave" />

        <h2>Let's setup language and location</h2>
        <div className="form-section-button-container">
          <p>Where is your company located?</p>
          <InputField
            id="location"
            label="your company location"
            formEvent={onChangeLocation}
          />
        </div>

        <div className="form-section-button-container">
          <p>Which languages can you communicate?</p>
          <InputField
            id="language"
            label="language"
            formEvent={onChangeLanguage}
          />
        </div>
        <form className="form-section-button-container" onSubmit={handleSubmit}>
          <button
            id="language-next-btn"
            className="btn deep-blue-bg white-clrs w100"
            type="submit"
          >
            Submit page
          </button>
        </form>
      </Section>
    </ContentSection>
  );
}
