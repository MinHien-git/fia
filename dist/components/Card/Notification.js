import clsx from "clsx";
import React from "react";
export default function Notification(_a) {
    var status = _a.status, message = _a.message;
    return (React.createElement("div", { id: "notification", className: clsx(status) },
        React.createElement("p", null, message)));
}
//# sourceMappingURL=Notification.js.map