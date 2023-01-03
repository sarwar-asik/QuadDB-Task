import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../customCss/Custom.css";
const Home = () => {
  const navigate  = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((datam) => {
        setData(datam);
      });
  }, []);

  const handleClick =movie =>{
    navigate(`/details/${movie?.score}`,{state:movie})
  }
  //   console.log(data);

  return (
    <div>
      <h1 className="my-5 text-secondary"> Our Movies </h1>

      <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
        {data?.map((movie) => {
          const {
            url,
            name,
            type,
            genres,
            status,
            officialSite,
            rating,
            country,
            image,
            summary,
            premiered
          } = movie.show;
          const details = summary.replace(/(<([^>]+)>)/gi, "")
          return (
            <div className="col card-container">
              <div className="card ">
                <img
                  src={image?.original?image?.original:"https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"}
                  className="card-img-top imagestyle"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text text-secondary">
                    {details.length<70?details:details.slice(0,100)+"...... See more"}
                  </p>
                  <button onClick={()=> handleClick(movie)} className="btn btn-primary">
                    Details
                  </button>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Premiered : {premiered}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
