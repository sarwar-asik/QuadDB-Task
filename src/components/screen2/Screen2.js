import React from "react";
import { useLocation } from "react-router-dom";
import "../../customCss/Custom.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ModalDetails from "./ModalDetails";

const Screen2 = () => {
  const { state } = useLocation();
  const { show } = state;
  //   console.log(show);
  const {
    name,
    image,
    summary,
    network,
  } = state?.show;


  const headerBtn = [
    { name: "Main", bg: "bg-secondary text-light" },
    { name: "Episodes" },
    { name: "Cast" },
    { name: "Crew" },
    { name: "Character" },
    { name: "Gallery" },
    { name: "News" },
  ];
  const details = summary.replace(/(<([^>]+)>)/gi, "");

  return (
    <div>
      <h2 className="my-5"> {name} </h2>

      <header className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 bg-secondar">
        <section className="col">
          <p className={`btngroup text-secondary`}>
            {headerBtn?.map((btn) => {
              return (
                <button className={`${btn.bg && btn?.bg}`}> {btn?.name}</button>
              );
            })}
          </p>
          <div className="d-flex gap-3 ">
            <img src={image?.medium} className="imagestyle" alt="" />

            <div className="">
              <p className="fs-6">
                {details.length < 70 ? details : details.slice(0, 300)}
              </p>
              <button
                type="button"
                className="btn btn-primary btnDetails"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Book Movie
              </button>
              <ModalDetails state={state} />
            </div>
          </div>
        </section>
        <section className="col d-flex flex-column m-auto shadow p-5 text-secondary">
          <h6>
               
            <b> Country :</b>   
            {network.country?.name ? network.country.name : "United States"}   
          </h6>
          <h6>
               
            <b> Genres:</b> {show?.genres[0]} with {show?.genres[1]}   
          </h6>
          <h6>
               
            <b> Time-Zone:</b> {network.country?.timezone}   
          </h6>
        </section>
      </header>
    </div>
  );
};

export default Screen2;
