import React from "react";
import "../../customCss/Custom.css";

const Footer = () => {
  return (
    <div className="py-5 px-4 d-flex justify-content-between bg-secondary mt-5 ">
      <aside className="d-flex ">
        <p className="text-light "> This is task project for Cryptic Media </p>
        <h6 className="text-black-50">Created By </h6>
        <p>
          <b> Name :</b> Sarwar Hossain
        </p>
        <p>
          <b> Email :</b> sarwarasik@gmail.com
        </p>
        <p>
          <b> Name :</b> Sarwar Hossain
        </p>
        <p>
          <b> Whats App</b> +8801602819933
        </p>
      </aside>
      <aside>
        <p>Github Repository :</p>
        <a
          className="links"
          href="https://github.com/sarwar-asik/QuadDB-Task"
          target={"_blank"}
        >
               
          Source Code
        </a>
      </aside>
    </div>
  );
};

export default Footer;
