import "./Form.scss";
import Tag from "../Tag/tag";
import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import InputField from "../InputForm/InputField";
import DoubleSlider from "../InputForm/DoubleSlider";
import TextAreaField from "../InputForm/TextAreaField";
import { AuthContext } from "../../context/authenticateContext";
import {
  AuthContextType,
  PostProjectForm_Interface,
  Request_Interface,
  User_Interface,
} from "@/interfaces/app_interfaces";
import axiosClient from "../../api/axiosClient";
import { ServerResponse } from "http";
import { redirect, useNavigate } from "react-router-dom";

export default function PostProjectForm({
  closeForm,
}: PostProjectForm_Interface) {
  const [currentPage, setCurrentPage] = useState(0);
  const { auth } = useContext(AuthContext) as AuthContextType;
  const maxPage = auth ? 6 : 7;
  const navigate = useNavigate();
  const [tags, setTags] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(4);

  useEffect(() => {
    const newPage = document.getElementById("post-section-" + currentPage);
    newPage?.classList.add("active");
  }, [currentPage]);
  const resetData = () => {
    setTags([]);
    setCurrentPage(0);
    setAmount(4);
    setTitle("");
    setDescription("");
    setEmail("");
  };
  const NextPage = () => {
    if (currentPage < maxPage - 1) {
      const oldPage = document.getElementById("post-section-" + currentPage);
      oldPage?.classList.remove("active");
      setCurrentPage(currentPage + 1);
    }
  };
  const constChooseOption = (value: number) => {
    setAmount(value);
  };
  const onChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
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
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      let param = {
        location: location,
        tags: tags,
        title: title,
        description: description,
        amount: amount,
        name: name,
      };
      if (auth) {
        param = {
          ...param,
          ...{ source: auth._id },
        };
      } else {
        param = {
          ...param,
          ...{ source: email },
        };
      }
      const request = axiosClient.post<any, Request_Interface>(
        "postproject",
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
        closeForm();
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
    <form className="form-section flex relative" onSubmit={handleSubmit}>
      <div className="section-container flex" id="post-project-form">
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
            <Tag
              tag_value="Brand Management"
              tag_id="BM_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("BM");
              }}
            />
            <Tag
              tag_value="Media Relations"
              tag_id="MRL_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("MRL");
              }}
            />
            <Tag
              tag_value="Social media management"
              tag_id="SMM_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("SMM");
              }}
            />
            <Tag
              tag_value="Outreach"
              tag_id="OR_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("OR");
              }}
            />
            <Tag
              tag_value="Market Research"
              tag_id="MR_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("MR");
              }}
            />
            <Tag
              tag_value="Event Planning"
              tag_id="EP_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("EP");
              }}
            />
            <Tag
              tag_value="Communication Training"
              tag_id="CT_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("CT");
              }}
            />
            <Tag
              tag_value="Write internal ads"
              tag_id="WIA_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("WIA");
              }}
            />
            <Tag
              tag_value="Content Marketing"
              tag_id="CM_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("CM");
              }}
            />
            <Tag
              tag_value="Print Ads"
              tag_id="PA_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("PA");
              }}
            />
            <Tag
              tag_value="TVC"
              tag_id="TVC_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("TVS");
              }}
            />
            <Tag
              tag_value="FB & CC MARKETING"
              tag_id="FBC_"
              name="services_"
              onClickEvent={(e) => {
                e.stopPropagation();
                handleService("FBC");
              }}
            />
          </ul>
        </section>
        <section className="flex" id="post-section-2">
          <h3>Which location of Agency do you want to work with?</h3>
          <InputField
            id="name-2"
            label="name"
            formEvent={onChangeName}
            value={name}
          />
          <InputField
            id="location-1"
            label="location"
            formEvent={onChangeLocation}
            value={location}
          />
        </section>
        <section className="flex" id="post-section-3">
          <h3>Which size of agencies would you prefer?</h3>
          <div className="ratio-input-container">
            <div className="ratio-input" onClick={() => constChooseOption(1)}>
              <input type="radio" id="small" name="size" value="small" /> 
              <label htmlFor="small">Small agencies (1-10)</label>
            </div>

            <div className="ratio-input" onClick={() => constChooseOption(2)}>
              <input type="radio" id="medium" name="size" value="medium" /> 
              <label htmlFor="medium">Medium agencies (11-50)</label>
            </div>
            <div className="ratio-input" onClick={() => constChooseOption(3)}>
              <input type="radio" id="large" name="size" value="large" /> 
              <label htmlFor="large">Large agencies (51+)</label>
            </div>
            <div className="ratio-input" onClick={() => constChooseOption(4)}>
              <input type="radio" id="none" name="size" value="none" /> 
              <label htmlFor="none">I don't care</label>
            </div>
          </div>
        </section>
        <section className="flex" id="post-section-4">
          <h3>What range of budget do you want to find?</h3>
          <DoubleSlider />
        </section>
        <section className="flex" id="post-section-5">
          <h3>Tell us about your project</h3>
          <div>
            <TextAreaField
              id="title"
              label="project title"
              classNames="title-textarea"
              onChange={onChangeTitle}
              value={title}
            />
            <TextAreaField
              id="description"
              label="project description "
              classNames="description-textarea"
              onChange={onChangeDescription}
              value={description}
            />
          </div>
        </section>
        {!auth ? (
          <section className="flex" id="post-section-6">
            <h3>
              Last Step: Let us know we to notified you when we found your best
              match agency
            </h3>
            <InputField
              type="email"
              id="email"
              label="email"
              formEvent={onChangeEmail}
              value={email}
            />
          </section>
        ) : null}
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
          {currentPage !== maxPage - 1 ? (
            <div
              id="postproject-next-btn"
              className="btn deep-blue-bg white-clrs w100"
              onClick={NextPage}
            >
              next
            </div>
          ) : (
            <button
              id="postproject-next-btn"
              className="btn deep-blue-bg white-clrs w100"
              type="submit"
            >
              submit
            </button>
          )}
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
