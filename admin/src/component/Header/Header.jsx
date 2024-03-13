import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = ({ headerText }) => {
  return (
    <div>
      <div className="header">
        <img src="https://ldtech.in/wp-content/uploads/2024/01/logo.png" alt="Logo" className="headerlogo"/>
        <h1>{headerText}</h1>
        <a href="/getHome" className="btn"><FontAwesomeIcon icon={faHouse} /></a>
      </div>
    </div>
  );
};

export default Header;
