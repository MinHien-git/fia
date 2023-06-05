import React from "react";
import Section from "../components/Section/Section";
import ButtonPopupComponent from "../components/Button/ButtonPopup";
import SearchAgencyForm from "../components/Forms/SearchAgencyForm";
import PostProjectForm from "../components/Forms/PostProjectForm";
import Card from "../components/Card/Card";
import ContentSection from "../components/ContentSection/ContentSection";
import useScrollToTop from "../hook/useScrollToTop";
import ButtonComponent from "../components/Button/ButtonComponent";
import VerticalCard from "../components/Card/VerticalCard";
import { faSearch, faLocationCrosshairs, faCheck, faBell, faChildReaching, } from "@fortawesome/free-solid-svg-icons";
export default function LandingPage() {
    useScrollToTop(0, 0);
    return (React.createElement(ContentSection, null,
        React.createElement(Section, { className: "landing-page-primary" },
            React.createElement("img", { className: "wave", src: "./wave.svg", alt: "wave" }),
            React.createElement("h1", { className: "deep-blue-clrs" }, "FindAgencies"),
            React.createElement("p", { className: "bold deep-blue-clrs" }, "The ultimate dating app for Clients and Agencies"),
            React.createElement(SearchAgencyForm, null),
            React.createElement("span", { className: "grey-color" }, "or"),
            React.createElement(ButtonPopupComponent, { id: "post-form-container", popUp: React.createElement(PostProjectForm, null), button_string: "Post your Project" }),
            React.createElement("img", { id: "contact-sgv", src: "./Contact us 1.png", alt: "contact-us" }),
            React.createElement("img", { className: "wave bottom", src: "./blob-3.svg", alt: "blob-3" })),
        React.createElement(Section, { className: "landing-page-primary-resources" },
            React.createElement("h2", { className: "deep-blue-clrs" }, "What We Can Do For You"),
            React.createElement("p", { className: "grey-color" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare",
                " "),
            React.createElement("div", { className: "card-container flex" },
                React.createElement(Card, { icon: faCheck, title: "Find you a Agency fit for your need.", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faSearch, title: "Hit the spot with Post your Project", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faLocationCrosshairs, title: "Direct Access to an Agency", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }))),
        React.createElement(Section, { className: "landing-page-primary-customer" },
            React.createElement("img", { className: "wave", src: "./blob-4.svg", alt: "blob-3" }),
            React.createElement("h2", { className: "deep-blue-clrs" }, "Let us join your business journey!"),
            React.createElement("div", { className: "flex" },
                React.createElement(ButtonComponent, { button_string: "SearchAgencies" }),
                React.createElement("span", null, "or"),
                React.createElement(ButtonPopupComponent, { id: "post-form-container", popUp: React.createElement(PostProjectForm, null), button_string: "Post your Project" }))),
        React.createElement(Section, { className: "landing-page-primary-resources" },
            React.createElement("h2", null, "Join the community of agencies"),
            React.createElement("p", { className: "grey-color" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare",
                " "),
            React.createElement("div", { className: "card-container flex" },
                React.createElement(Card, { icon: faChildReaching, title: "Reach your potential customer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faBell, title: "Get notification for suitable project", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faSearch, title: "Find yourself a agency to working with.", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }))),
        React.createElement(Section, { className: "landing-page-primary-customer" },
            React.createElement("img", { className: "wave bottom", src: "./blob-2.svg", alt: "blob" }),
            React.createElement("h2", { className: "deep-blue-clrs" }, "Let us growth with your agency business"),
            React.createElement("div", { className: "flex" },
                React.createElement(ButtonComponent, { button_string: "Create Profile" }),
                React.createElement("span", null, "or"),
                React.createElement(ButtonPopupComponent, { id: "post-form-container", popUp: React.createElement(PostProjectForm, null), button_string: "Learn more" }))),
        React.createElement(Section, { className: "landing-page-primary-resources" },
            React.createElement("h2", null, "Our Resources"),
            React.createElement("p", { className: "grey-color" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare",
                " "),
            React.createElement("div", { className: "card-container flex" },
                React.createElement(Card, { icon: faSearch, title: "Direct Access to an Agency", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faSearch, title: "Direct Access to an Agency", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }),
                React.createElement(Card, { icon: faSearch, title: "Direct Access to an Agency", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci." }))),
        React.createElement(Section, { className: "landing-page-primary-resources" },
            React.createElement("div", { className: "vert-card-container flex" },
                React.createElement(VerticalCard, null),
                React.createElement(VerticalCard, null),
                React.createElement(VerticalCard, null))),
        React.createElement(Section, { className: "landing-page-primary-customer" },
            React.createElement("h2", { className: "deep-blue-clrs" }, "About Us"),
            React.createElement("img", { className: "wave", src: "./blob-1.svg", alt: "blob" }),
            React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorum aspernatur recusandae, deleniti amet quo nemo ab assumenda quisquam quam."))));
}
//# sourceMappingURL=LandingPage.js.map