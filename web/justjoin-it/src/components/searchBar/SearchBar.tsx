import React from "react";
import "./style.css";
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBar__left">
        <input className="searchBar__input" placeholder="Search..."></input>
        <button type="button" className="searchBar__button">
          Location
        </button>
      </div>
      <div className="searchBar__right">
        <div className="searchBar__icon">
          <a>
            <FaCss3 className="icon" />
          </a>
          <span className="icon__text">CSS</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaJs className="icon" />
          </a>
          <span className="icon__text">JS</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaHtml5 className="icon" />
          </a>
          <span className="icon__text">HTML</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaPython className="icon" />
          </a>
          <span className="icon__text">Python</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaJava className="icon" />
          </a>
          <span className="icon__text">Java</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaReact className="icon" />
          </a>
          <span className="icon__text">React</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaNodeJs className="icon" />
          </a>
          <span className="icon__text">Node</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaVuejs className="icon" />
          </a>
          <span className="icon__text">Vue</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaAngular className="icon" />
          </a>
          <span className="icon__text">Angular</span>
        </div>
        <div className="searchBar__icon">
          <a>
            <FaGithub className="icon" />
          </a>
          <span className="icon__text">Github</span>
        </div>
      </div>
    </div>
  );
};
