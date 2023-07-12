import React, { useState, useContext, ChangeEvent } from "react";
import Popup from "./Popup";
import InputField from "../InputForm/InputField";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponentLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Popup_Interface,
  AuthContextType,
  Request_Interface,
} from "../../interfaces/app_interfaces";
import { AuthContext } from "../../context/authenticateContext";
import TextAreaField from "../InputForm/TextAreaField";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import ButtonSubmitForm from "../Button/ButtonSumitForm";

export default function FeedbackPopup({
  toggle = false,
  close,
}: Popup_Interface) {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rate, setRate] = useState<number>(0);

  const { auth } = useContext(AuthContext) as AuthContextType;

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    async function postData() {
      let param = {
        user_id: auth?._id,
        page_id: id,
        rate: rate,
        title: title,
        description: description,
      };

      const request = axiosClient.post<any, Request_Interface>(
        `/feedback/${auth?._id}/${id}`,
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
        setTitle("");
        setDescription("");
        close();
      });
    }
    postData();
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const changeRate = (value: number) => {
    setRate(value);
  };

  return (
    <Popup className={clsx(toggle && "active feedback-popup")}>
      <div className="service-popup-container">
        <form className="service-popup" onSubmit={handleSubmit}>
          {auth ? (
            <>
              <h3>Write feedback</h3>
              <ul className="flex">
                <li>
                  <input type="radio" name="rating" id="start-1" />
                  <label
                    htmlFor="start-1"
                    onClick={() => changeRate(1)}
                  ></label>
                </li>
                <li>
                  <input type="radio" name="rating" id="start-2" />
                  <label
                    htmlFor="start-2"
                    onClick={() => changeRate(2)}
                  ></label>
                </li>
                <li>
                  <input type="radio" name="rating" id="start-3" />
                  <label
                    htmlFor="start-3"
                    onClick={() => changeRate(3)}
                  ></label>
                </li>
                <li>
                  <input type="radio" name="rating" id="start-4" />
                  <label
                    htmlFor="start-4"
                    onClick={() => changeRate(4)}
                  ></label>
                </li>
                <li>
                  <input type="radio" name="rating" id="start-5" />
                  <label
                    htmlFor="start-5"
                    onClick={() => changeRate(5)}
                  ></label>
                </li>
              </ul>
              <InputField
                id="feedback-title-area"
                label="title"
                formEvent={onChangeTitle}
                value={title}
              />
              <TextAreaField
                id="feedback-area"
                label="feedback"
                value={description}
                onChange={onChangeDescription}
              />
              <ButtonSubmitForm button_string="Send feedback" />
            </>
          ) : (
            <>
              <h3>You must login first</h3>
              <InputField type="text" id="email" label="email" />
              <InputField type="password" id="password" label="password" />
              <ButtonComponent
                button_string="Login"
                // onClickEvent={ChangeAddService}
              />
              <p className="register-section">
                Don't have an account yet? <span>register</span>
              </p>
            </>
          )}
        </form>
        <div className="close-button">
          <FontAwesomeIcon icon={faXmark} onClick={close} />
        </div>
      </div>
    </Popup>
  );
}
