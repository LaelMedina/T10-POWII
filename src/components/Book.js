import React from "react";
import "../Book.css"; // Importa estilos adicionales si es necesario

function Book(props) {
  const cardStyle = {
    width: "18rem",
    margin: "auto",
  };

  const imageStyle = {
    width: "100%", // Ajusta el ancho de la imagen al 100% de la tarjeta
    height: "360px", // Fija la altura de la imagen
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
            Ver
          </button>
          <button
            onClick={() => props.fnAddFavorites(props.value)}
            className="btn btn-warning"
          >
            Favorito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
