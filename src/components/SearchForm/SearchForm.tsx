import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchForm() {
  return (
    <form className="search-form flex relative">
      <input id="search" type="text" />
      <label htmlFor="search">What service?</label>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
