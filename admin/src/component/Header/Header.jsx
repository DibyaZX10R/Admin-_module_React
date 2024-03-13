// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = ({ headerText }) => {
  return (
    <div>
      <div className="header">
        <img src="https://ldtech.in/wp-content/uploads/2024/01/logo.png" alt="Logo" className="headerlogo"/>
        <h1>{headerText}</h1>
        <Link to="/Home" className="btn">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
