import { Notification_Interface } from "../../interfaces/app_interfaces";
import clsx from "clsx";
import React from "react";

export default function Notification({
  status,
  message,
}: Notification_Interface) {
  return (
    <div id="notification" className={clsx(status)}>
      <p>{message}</p>
    </div>
  );
}
