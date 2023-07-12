var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import ContentSection from "../components/ContentSection/ContentSection";
import Section from "../components/Section/Section";
import React, { useEffect, useState, useContext } from "react";
import useScrollToTop from "../hook/useScrollToTop";
import "./EditWorkSpacePage.scss";
import ButtonComponent from "../components/Button/ButtonComponent";
import PorfolioCard from "../components/Card/PorfolioCard";
import ReviewFeedbackCard from "../components/Card/ReviewFeedbackCard";
import axiosClient from "../api/axiosClient";
import { useParams } from "react-router-dom";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
import { useNavigate } from "react-router-dom";
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
    var id = useParams().id;
    var _a = useState({}), pageInformation = _a[0], setPageInformation = _a[1];
    useScrollToTop(0, 0);
    var _b = useToggleNavbar(), navbarBlock = _b[0], clearNavbarBlock = _b[1];
    var auth = useContext(AuthContext).auth;
    var navigate = useNavigate();
    var _c = useState(false), createService = _c[0], setCreateService = _c[1];
    var _d = useState(false), createPortfolio = _d[0], setCreatePortfolio = _d[1];
    var _e = useState([]), services = _e[0], setServices = _e[1];
    var _f = useState(""), serviceName = _f[0], setServiceName = _f[1];
    var _g = useState(0), servicePrice = _g[0], setServicePrice = _g[1];
    var _h = useState([]), porfolios = _h[0], setPorfolios = _h[1];
    var _j = useState(""), porfolioName = _j[0], setporfolioName = _j[1];
    var _k = useState(""), porfolioDescription = _k[0], setPorfolioDescription = _k[1];
    var _l = useState([]), tags = _l[0], setTags = _l[1];
    useSetTitle("Fya | ".concat(pageInformation.name ? pageInformation.name : "bussiness page"));
    var ChangeServiceName = function (event) {
        setServiceName(event.target.value);
    };
    function postData() {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                if (auth) {
                    request = axiosClient.post("/business/".concat(auth === null || auth === void 0 ? void 0 : auth._id, "/page/").concat(pageInformation._id), pageInformation);
                    request.then(function (result) {
                        var success = result.success, message = result.message, response_status = result.response_status, data = result.data, pagination = result.pagination;
                        if (success)
                            return navigate("/business/".concat(auth._id));
                    });
                }
                return [2 /*return*/];
            });
        });
    }
    var SaveWorkSpace = function () {
        var service = pageInformation;
        service.services = __spreadArray([], services, true);
        service.porfolio = __spreadArray([], porfolios, true);
        setPageInformation(service);
        postData();
    };
    var ChangeServicePrice = function (event) {
        if (Number(event.target.value))
            setServicePrice(Number(event.target.value));
    };
    var ChangePorfolioName = function (event) {
        setporfolioName(event.target.value);
    };
    var ChangeDescription = function (event) {
        setPorfolioDescription(event.target.value);
    };
    var ChangeAddService = function () {
        var service_id = uuidv4();
        var service = {
            id: service_id,
            title: serviceName,
            price: servicePrice,
            rating: 0,
        };
        setServiceName("");
        setServicePrice(0);
        setCreateService(false);
        setServices(__spreadArray(__spreadArray([], services, true), [service], false));
    };
    var ChangeAddPortfoilo = function () {
        var porfolios_id = uuidv4();
        var portfolio = {
            id: porfolios_id,
            title: porfolioName,
            price: porfolioDescription,
        };
        setporfolioName("");
        setPorfolioDescription("");
        setCreatePortfolio(false);
        setPorfolios(__spreadArray(__spreadArray([], porfolios, true), [portfolio], false));
    };
    useEffect(function () {
        clearNavbarBlock();
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var request, _a, services_1, porfolio;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!auth) return [3 /*break*/, 2];
                            return [4 /*yield*/, axiosClient.get("/bussiness/".concat(auth._id, "/page/").concat(id))];
                        case 1:
                            request = _b.sent();
                            _a = request.data, services_1 = _a.services, porfolio = _a.porfolio;
                            setPageInformation(request.data);
                            setServices(services_1);
                            setPorfolios(porfolio);
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        }
        if (auth) {
            fetchData();
        }
        else {
            navigate("/");
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "save-workspace" },
            React.createElement(ButtonComponent, { button_string: "Cancel", className: "cancel" }),
            React.createElement(ButtonComponent, { button_string: "Save workspace", onClickEvent: SaveWorkSpace })),
        React.createElement(Popup, { className: clsx(createService && "active") },
            React.createElement("div", { className: "service-popup-container" },
                React.createElement("div", { className: "service-popup" },
                    React.createElement("h3", null, "Add Your Service"),
                    React.createElement(InputField, { type: "text", id: "service-name", label: "service name", value: serviceName, formEvent: ChangeServiceName }),
                    React.createElement(InputField, { type: "number", id: "service-price", label: "service price", value: servicePrice, formEvent: ChangeServicePrice }),
                    React.createElement(ButtonComponent, { button_string: "Add Service", onClickEvent: ChangeAddService })),
                React.createElement("div", { className: "close-button" },
                    React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: function () {
                            setServicePrice(0);
                            setServiceName("");
                            setCreateService(false);
                        } })))),
        React.createElement(Popup, { className: clsx(createPortfolio && "active") },
            React.createElement("div", { className: "service-popup-container" },
                React.createElement("div", { className: "service-popup" },
                    React.createElement("h3", null, "Add Your Portfolio"),
                    React.createElement(InputField, { type: "text", id: "portfolio-name", label: "project name", value: porfolioName, formEvent: ChangePorfolioName }),
                    React.createElement(TextAreaField, { id: "description", label: "description", classNames: "", value: porfolioDescription, onChange: ChangeDescription }),
                    React.createElement(ButtonComponent, { button_string: "Add Portfolio", onClickEvent: ChangeAddPortfoilo })),
                React.createElement("div", { className: "close-button" },
                    React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: function () {
                            setPorfolioDescription("");
                            setporfolioName("");
                            setCreatePortfolio(false);
                        } })))),
        React.createElement(ContentSection, { className: "agency-page-edit" },
            React.createElement(Section, { className: "agency-page-detail" },
                React.createElement("div", { className: "agency-profile-container" },
                    React.createElement("div", { id: "agencies-profile-image", className: "relative" },
                        React.createElement("div", { id: "cover-page" }),
                        React.createElement("div", { id: "profile-image" })),
                    React.createElement("div", { className: "agency-profile-information-container" },
                        React.createElement("div", { className: "agency-profile-basic-information" },
                            React.createElement("h2", null, pageInformation.name),
                            React.createElement("div", null,
                                React.createElement("p", null,
                                    "Based in: ",
                                    pageInformation.location),
                                React.createElement("p", null, "Available: Nationwide"))),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "agency-start-rate-container" },
                            React.createElement("ul", { className: "agency-start-rate" },
                                React.createElement("li", null),
                                React.createElement("li", null),
                                React.createElement("li", null),
                                React.createElement("li", null),
                                React.createElement("li", null)),
                            React.createElement("p", null, "0.0/5.0"))),
                    React.createElement("p", null, pageInformation.content))),
            React.createElement(Section, { className: "agency-team-infomation" },
                React.createElement("article", null,
                    React.createElement("p", null,
                        "Team: ",
                        React.createElement("span", null, "123 People")),
                    React.createElement("p", null,
                        "Founded in: ",
                        React.createElement("span", null, "2023")),
                    React.createElement("p", null,
                        "Language(S) Availiable: ",
                        React.createElement("span", null, pageInformation.language)),
                    React.createElement("p", null,
                        "Has joined Fia since: ",
                        React.createElement("span", null, "2023"))),
                React.createElement(ButtonComponent, { button_string: "Contact ABC agency" })),
            React.createElement(Section, { className: "agency-service-offers" },
                React.createElement("h3", null, "Services"),
                React.createElement("div", { className: "service-offer-container" }, services.map(function (v) { return (React.createElement(ServiceCardsEdit, { key: v === null || v === void 0 ? void 0 : v.id, id: v === null || v === void 0 ? void 0 : v.id, title: v.title, price: v.price })); })),
                React.createElement(ButtonComponent, { button_string: "Add service", onClickEvent: function () { return setCreateService(!createService); } })),
            React.createElement(Section, { className: "portfolio-section" },
                React.createElement("h3", null, "Portfolio:"),
                React.createElement("div", { className: "our-service" },
                    React.createElement("div", { className: "service-offer-container-scroll" }, porfolios.map(function (v) { return (React.createElement(PorfolioCard, null)); }))),
                React.createElement(ButtonComponent, { button_string: "Add Portfolio", onClickEvent: function () { return setCreatePortfolio(!createPortfolio); } })),
            React.createElement(Section, { className: "portfolio-section" },
                React.createElement("h3", null, "Reviews & Feedback:"),
                React.createElement("div", { className: "our-service" },
                    React.createElement("div", { className: "service-offer-container-scroll" },
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null)))))));
}
//# sourceMappingURL=EditWorkSpacePage.js.map