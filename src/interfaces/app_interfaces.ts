import { size } from "@/constants/components";
import { JsxElement } from "typescript";

export interface Button {
  button_string: string;
  button_size?: size;
  className?: string;
  onClickEvent?: () => void;
}

export interface ButtonPopup {
  button_string: string;
  button_size?: size;
  id: string;
  className?: string;
  popUp: string | JSX.Element | JSX.Element[];
}
export interface ButtonSubmit {
  button_string: string;
  button_size?: size;
  submitEvent?: (e) => void;
}

export interface Link {
  button_string: string;
  href: string;
}
export interface Content {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export interface Sec {
  children: string | JSX.Element | JSX.Element[];
  className: string;
}

export interface ServerResponse {
  data: Object | undefined | Array<Object>;
  success: Boolean;
  message: string;
  response_status: number;
  pagination: Object;
}
export interface ServerData {
  data: Object | undefined | Array<Object>;
  success: Boolean;
  message: string;
  response_status: number;
  pagination: Object;
}
export interface Tags {
  tag_value: string;
  tag_id: string;
  name: string;
  onClickEvent?;
  isChecked?: boolean;
}

export interface AgencyCard_Interface {
  title: string;
  tag: Array<string>;
  desc: string;
  id: string;
}

export interface AgencyPage_Interface {
  title?: string;
  tag?: Array<string>;
  desc?: string;
  _id?: string;
  city?: string;
}

export interface InputField_Interface {
  type?: string;
  id: string;
  label: string;
  formEvent?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export type AgencyPage_Type = {
  page_title?: string;
  tags?: Array<string>;
  content?: string;
  _id?: string;
  location?: string;
};
