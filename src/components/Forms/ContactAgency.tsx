import React from "react";
import ButtonSubmitForm from "../Button/ButtonSumitForm";

export default function ContactAgency() {
  return (
    <form id="contact-form" className="form-section flex relative">
      <div className="section-container flex">
        <h3>Let us know what you need</h3>
        <div className="contact-form-information flex">
          <div className="flex">
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="flex">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="flex">
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="flex">
            <label>Your message</label>
            <textarea placeholder="Enter your message" />
          </div>
        </div>
        {/* <div>
                  
              </div> */}
        <ButtonSubmitForm button_string="Submit" />
      </div>
    </form>
  );
}
