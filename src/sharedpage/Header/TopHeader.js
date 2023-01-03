import React from "react";
import { Link } from "react-router-dom";
import "../../customCss/Custom.css";

const TopHeader = () => {
  return (
    <div
      className="py-2 bg-secondary topHeaderContainer"
      style={{ height: "70px" }}
    >
      <div className="">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          className=""
          alt=""
          style={{ height: "50px" }}
        />
      </div>
      <div>
        <Link className="links fs-5"> Sign Up</Link>
        <Link className="links fs-5"> Login </Link>
      </div>
    </div>
  );
};

export default TopHeader;
