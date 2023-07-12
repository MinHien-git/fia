import React from "react";
export default function ServiceCards(_a) {
    var id = _a.id, title = _a.title, price = _a.price, _b = _a.rating, rating = _b === void 0 ? 0 : _b;
    return (React.createElement("div", { className: "flex card service-card", key: id },
        React.createElement("h4", null, title.toUpperCase()),
        React.createElement("div", { className: "service-card-star-rate-container" },
            React.createElement("ul", { className: "service-card-start-rate" },
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null)),
            React.createElement("p", null,
                rating,
                "/5.0")),
        React.createElement("div", { className: "price-container" },
            React.createElement("p", null, "Starting From"),
            React.createElement("p", { className: "price" },
                price,
                "$"))));
}
//# sourceMappingURL=ServiceCard.js.map