import React from "react";
import { useState } from "react";
import { card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [data, setData] = useState({
    title: props.t,
    description: props.d,
    posterURL: props.url,
    rating: props.rate,
  });

  return (
    <>
      <div
        class="card"
        style={{
          width: "14rem",
          height: "34rem",

          boxShadow: "10px 30px 10px #D6CED2",
          borderRadius: "10px",
          marginBottom: "5px",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Link
          to="/movie"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <img class="card-img-top" src={data.posterURL} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.description}</p>
          </div>
          <span className="card-footer" style={{ textAlign: "right" }}>
            <i class="fas fa-star-half-alt"></i>
            {data.rating}/10
          </span>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
