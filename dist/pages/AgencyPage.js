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
import ButtonPopupComponent from "../components/Button/ButtonPopup";
import ContentSection from "../components/ContentSection/ContentSection";
import Section from "../components/Section/Section";
import React, { useEffect, useState } from "react";
import { size } from "../constants/components";
import useScrollToTop from "../hook/useScrollToTop";
import ContactAgency from "../components/Forms/ContactAgency";
import "./AgencyPage.scss";
import ButtonComponent from "../components/Button/ButtonComponent";
import ServiceCards from "../components/Card/ServiceCard";
import PorfolioCard from "../components/Card/PorfolioCard";
import AgencySuggestionCard from "../components/Card/AgencySuggestionCard";
import ReviewFeedbackCard from "../components/Card/ReviewFeedbackCard";
import axiosClient from "../api/axiosClient";
import { useParams } from "react-router-dom";
import { useToggleNavbar } from "../hook/useToggleNavbar";
import useSetTitle from "../hook/useSetTitle";
export default function AgencyPage() {
    var id = useParams().id;
    var _a = useState({}), pageInformation = _a[0], setPageInformation = _a[1];
    useScrollToTop(0, 0);
    var _b = useToggleNavbar(), navbarBlock = _b[0], clearNavbarBlock = _b[1];
    useSetTitle("Fya | Agency");
    useEffect(function () {
        console.log(id);
        clearNavbarBlock();
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axiosClient.get("/agency/".concat(id))];
                        case 1:
                            request = _a.sent();
                            console.log(request);
                            setPageInformation(request.data[0]);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchData();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(ContentSection, { className: "agency-page" },
            React.createElement(Section, { className: "agency-page-detail" },
                React.createElement("div", { className: "agency-profile-container" },
                    React.createElement("div", { id: "agencies-profile-image", className: "relative" },
                        React.createElement("div", { id: "cover-page" }),
                        React.createElement("div", { id: "profile-image" })),
                    React.createElement("div", { className: "agency-profile-information-container" },
                        React.createElement("div", { className: "agency-profile-basic-information" },
                            React.createElement("h2", null, pageInformation.page_title),
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
                        React.createElement("span", null, "English, Vietnamese")),
                    React.createElement("p", null,
                        "Has joined Fia since: ",
                        React.createElement("span", null, "2023"))),
                React.createElement(ButtonComponent, { button_string: "Contact ABC agency" })),
            React.createElement(Section, { className: "agency-service-offers" },
                React.createElement("h3", null, "Services"),
                React.createElement("div", { className: "service-offer-container" },
                    React.createElement(ServiceCards, null),
                    React.createElement(ServiceCards, null),
                    React.createElement(ServiceCards, null))),
            React.createElement(Section, { className: "portfolio-section" },
                React.createElement("h3", null, "Portfolio:"),
                React.createElement("div", { className: "our-service" },
                    React.createElement("div", { className: "service-offer-container-scroll" },
                        React.createElement(PorfolioCard, null),
                        React.createElement(PorfolioCard, null),
                        React.createElement(PorfolioCard, null),
                        React.createElement(PorfolioCard, null)))),
            React.createElement(Section, { className: "portfolio-section" },
                React.createElement("h3", null, "Reviews & Feedback:"),
                React.createElement("div", { className: "our-service" },
                    React.createElement("div", { className: "service-offer-container-scroll" },
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null),
                        React.createElement(ReviewFeedbackCard, null)))),
            React.createElement(Section, { className: "portfolio-section" },
                React.createElement("h3", null, "Agencies Similar to ABC Agency:"),
                React.createElement("div", { className: "our-service" },
                    React.createElement("div", { className: "service-offer-container-scroll" },
                        React.createElement(AgencySuggestionCard, null),
                        React.createElement(AgencySuggestionCard, null),
                        React.createElement(AgencySuggestionCard, null),
                        React.createElement(AgencySuggestionCard, null))))),
        React.createElement(ButtonPopupComponent, { className: "sticky", button_string: "Contact us", button_size: size.LARGE, popUp: React.createElement(ContactAgency, null), id: "agency-contact" })));
}
//# sourceMappingURL=AgencyPage.js.map