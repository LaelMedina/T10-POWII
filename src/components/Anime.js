import React from "react";
import "../Anime.css";

function Anime(props) {
  const cardStyle = {
    width: "18rem",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        src={props.value.image}
        className="card-img-top"
        alt="..."
        style={imageStyle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.value.title}</h5>
        <p className="card-text">{props.value.author}</p>
        <p className="card-text">{props.value.year}</p>
        <div>
          <button className="btn btn-primary" style={{ marginRight: "10px" }}>
            See
          </button>
          <button
            onClick={() => props.fnAddFavorites(props.value)}
            className="btn btn-warning"
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Anime;
