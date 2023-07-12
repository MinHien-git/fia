import ButtonPopupComponent from "../components/Button/ButtonPopup";
import ContentSection from "../components/ContentSection/ContentSection";
import Section from "../components/Section/Section";
import React, { useEffect, useState, useContext, ChangeEvent } from "react";
import { size } from "../constants/components";
import useScrollToTop from "../hook/useScrollToTop";
import ContactAgency from "../components/Forms/ContactAgency";
import "./EditWorkSpacePage.scss";
import ButtonComponent from "../components/Button/ButtonComponent";
import ServiceCards from "../components/Card/ServiceCard";
import PorfolioCard from "../components/Card/PorfolioCard";
import AgencySuggestionCard from "../components/Card/AgencySuggestionCard";
import ReviewFeedbackCard from "../components/Card/ReviewFeedbackCard";
import {
  AgencyPage_Type,
  ServerResponse,
  AuthContextType,
  ServiceCard_Interface,
  ServerData,
  Request_Interface,
} from "../interfaces/app_interfaces";
import axiosClient from "../api/axiosClient";
import { useParams, useSearchParams } from "react-router-dom";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/authenticateContext";
import Popup from "../components/Popup/Popup";
import clsx from "clsx";
import InputField from "../components/InputForm/InputField";
import TextAreaField from "../components/InputForm/TextAreaField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import ServiceCardsEdit from "../components/Card/ServiceCardEdit";

export default function EditWorkSpacePage() {
  const { id } = useParams();
  const [pageInformation, setPageInformation] = useState<any>({});
  useScrollToTop(0, 0);
  const [navbarBlock, clearNavbarBlock] = useToggleNavbar();
  const { auth } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [createService, setCreateService] = useState<Boolean>(false);
  const [createPortfolio, setCreatePortfolio] = useState<Boolean>(false);
  const [services, setServices] = useState<Array<ServiceCard_Interface>>([]);
  const [serviceName, setServiceName] = useState<string>("");
  const [servicePrice, setServicePrice] = useState<number>(0);
  const [porfolios, setPorfolios] = useState<Array<Object>>([]);
  const [porfolioName, setporfolioName] = useState<string>("");
  const [porfolioDescription, setPorfolioDescription] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);

  useSetTitle(
    `Fya | ${pageInformation.name ? pageInformation.name : "bussiness page"}`
  );

  const ChangeServiceName = (event: ChangeEvent<HTMLInputElement>) => {
    setServiceName(event.target.value);
  };

  async function postData() {
    console.log(pageInformation);
    if (auth) {
      const request = axiosClient.post<any, Request_Interface>(
        `/business/${auth?._id}/page/edit/${pageInformation._id}`,
        pageInformation
      );
      request.then((result) => {
        const {
          success,
          message,
          response_status,
          data,
          pagination,
        }: Request_Interface = result;
        if (success) return navigate(`/business/${auth._id}`);
      });
    }
  }

  const SaveWorkSpace = () => {
    let service = pageInformation;
    service.services = [...services];
    service.porfolio = [...porfolios];
    setPageInformation(service);
    postData();
  };

  const ChangeServicePrice = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value)) setServicePrice(Number(event.target.value));
  };

  const ChangePorfolioName = (event: ChangeEvent<HTMLInputElement>) => {
    setporfolioName(event.target.value);
  };

  const ChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPorfolioDescription(event.target.value);
  };

  const ChangeAddService = () => {
    let service_id = uuidv4();
    let service = {
      id: service_id,
      title: serviceName,
      price: servicePrice,
      rating: 0,
    };
    setServiceName("");
    setServicePrice(0);
    setCreateService(false);
    setServices([...services, service]);
  };

  const ChangeAddPortfoilo = () => {
    let porfolios_id = uuidv4();
    let portfolio = {
      id: porfolios_id,
      title: porfolioName,
      price: porfolioDescription,
    };
    setporfolioName("");
    setPorfolioDescription("");
    setCreatePortfolio(false);
    setPorfolios([...porfolios, portfolio]);
  };

  useEffect(() => {
    clearNavbarBlock();

    async function fetchData() {
      if (auth) {
        const request = await axiosClient.get<any>(
          `/business/${auth._id}/page/edit/${id}`
        );
        const { services, porfolio } = request.data;
        console.log(request.data);
        setPageInformation(request.data);
        setServices(services ? services : []);
        setPorfolios(porfolio ? porfolio : []);
      }
      // setAgencies(result);
    }
    if (auth) {
      fetchData();
      console.log(pageInformation);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="save-workspace">
        <ButtonComponent button_string="Cancel" className="cancel" />
        <ButtonComponent
          button_string="Save workspace"
          onClickEvent={SaveWorkSpace}
        />
      </div>
      <Popup className={clsx(createService && "active")}>
        <div className="service-popup-container">
          <div className="service-popup">
            <h3>Add Your Service</h3>
            <InputField
              type="text"
              id="service-name"
              label="service name"
              value={serviceName}
              formEvent={ChangeServiceName}
            />
            <InputField
              type="number"
              id="service-price"
              label="service price"
              value={servicePrice}
              formEvent={ChangeServicePrice}
            />
            <ButtonComponent
              button_string="Add Service"
              onClickEvent={ChangeAddService}
            />
          </div>
          <div className="close-button">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setServicePrice(0);
                setServiceName("");
                setCreateService(false);
              }}
            />
          </div>
        </div>
      </Popup>
      <Popup className={clsx(createPortfolio && "active")}>
        <div className="service-popup-container">
          <div className="service-popup">
            <h3>Add Your Portfolio</h3>
            <InputField
              type="text"
              id="portfolio-name"
              label="project name"
              value={porfolioName}
              formEvent={ChangePorfolioName}
            />
            <TextAreaField
              id="description"
              label="description"
              classNames=""
              value={porfolioDescription}
              onChange={ChangeDescription}
            />
            <ButtonComponent
              button_string="Add Portfolio"
              onClickEvent={ChangeAddPortfoilo}
            />
          </div>
          <div className="close-button">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                setPorfolioDescription("");
                setporfolioName("");
                setCreatePortfolio(false);
              }}
            />
          </div>
        </div>
      </Popup>
      <ContentSection className="agency-page-edit">
        <Section className="agency-page-detail">
          <div className="agency-profile-container">
            <div id="agencies-profile-image" className="relative">
              <div id="cover-page"></div>
              <div id="profile-image"></div>
            </div>
            <div className="agency-profile-information-container">
              <div className="agency-profile-basic-information">
                <h2>{pageInformation.name}</h2>
                <div>
                  <p>Based in: {pageInformation.location}</p>
                  <p>Available: Nationwide</p>
                </div>
              </div>
              <hr />
              <div className="agency-start-rate-container">
                <ul className="agency-start-rate">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>0.0/5.0</p>
              </div>
            </div>
            <p>{pageInformation.content}</p>
          </div>
        </Section>
        <Section className="agency-team-infomation">
          <article>
            <p>
              Team: <span>123 People</span>
            </p>
            <p>
              Founded in: <span>2023</span>
            </p>
            <p>
              Language(S) Availiable: <span>{pageInformation.language}</span>
            </p>
            <p>
              Has joined Fia since: <span>2023</span>
            </p>
          </article>
          <ButtonComponent button_string="Contact ABC agency" />
        </Section>
        <Section className="agency-service-offers">
          <h3>Services</h3>
          <div className="service-offer-container">
            {services.map((v) => (
              <ServiceCardsEdit
                key={v?.id}
                id={v?.id}
                title={v.title}
                price={v.price}
              />
            ))}
          </div>
          <ButtonComponent
            button_string="Add service"
            onClickEvent={() => setCreateService(!createService)}
          />
        </Section>
        <Section className="portfolio-section">
          <h3>Portfolio:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              {porfolios ? porfolios.map((v) => <PorfolioCard />) : null}
            </div>
          </div>

          <ButtonComponent
            button_string="Add Portfolio"
            onClickEvent={() => setCreatePortfolio(!createPortfolio)}
          />
        </Section>
        <Section className="portfolio-section">
          <h3>Reviews & Feedback:</h3>
          <div className="our-service">
            <div className="service-offer-container-scroll">
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
              <ReviewFeedbackCard />
            </div>
          </div>
        </Section>
      </ContentSection>
    </>
  );
}
