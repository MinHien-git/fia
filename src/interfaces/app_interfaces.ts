import TextAreaField from "@/components/InputForm/TextAreaField";
import { size } from "@/constants/components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { JsxElement } from "typescript";

export interface Button {
  button_string: string;
  button_size?: size;
  className?: string;
  onClickEvent?: () => void;
}

export interface Button_Link {
  button_string: string;
  to?: string;
  button_size?: size;
  className?: string;
  onClickEvent?: () => void;
}

export interface ButtonPopup {
  button_string: string;
  button_size?: size;
  id: string;
  className?: string;
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
export interface PostProjectForm_Interface {
  closeForm: () => void;
}
export interface Sec_Interface {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
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
  value?: string | number;
  formEvent?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export type AgencyPage_Type = {
  page_title?: string;
  tags?: Array<string>;
  content?: string;
  _id?: string;
  location?: string;
  services?: Array<Object>;
};

export interface Card_Interface {
  title: string;
  desc: string;
  icon: IconDefinition;
}

export interface Get_Interface {
  success: boolean;
  message: string;
  response_status: number;
  data?: any;
  pagination: Object | string | undefined;
}

export interface Request_Interface {
  success: boolean;
  message: string;
  response_status: number;
  data: User_Interface | undefined;
  pagination: Object | string | undefined;
  type?: string;
}

export interface User_Interface {
  _id?: string;
  name?: string;
  type?: string;
  page?: string;
}

export type AuthContextType = {
  auth: User_Interface | undefined;
  logout: () => void;
  login: (user: User_Interface) => void;
};
export interface Search_Interface {
  location: string;
  tags: Array<string>;
}
export type SearchContextType = {
  search: Search_Interface | undefined;
  clearSearch: () => void;
  startSearch: (search_param: Search_Interface) => void;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export type status = "success" | "fail" | "none";

export interface Notification_Interface {
  status: status;
  message: string;
}

export interface TextAreaField_Interface {
  id: string;
  label: string;
  classNames?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export interface ServiceCard_Interface {
  id: string;
  title: string;
  price: number;
  rating?: number;
}

export interface Popup_Interface {
  toggle?: boolean;
  close: () => void;
}
