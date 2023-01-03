import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary text-light "
        style={{ backgroundColor: "rgb(14, 168, 168)" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-3 text-light fw-bold">
            Cryptic Media
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link to="/" className="nav-link text-light active">
                  
                Home  
              </Link>
              <Link className="nav-link text-secondary  "> Shows </Link>
              <Link className="nav-link   text-secondary active"> People </Link>
              <Link className="nav-link   text-secondary active">
                  
                Network
              </Link>
              <Link className="nav-link  text-secondary  active">
                
                Web Channel  
              </Link>
              <Link className="nav-link   text-secondary active">
               
                Article
              </Link>
              <Link className="nav-link   text-secondary active"> Shows </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
