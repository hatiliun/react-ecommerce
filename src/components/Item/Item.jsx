import React, { useState } from "react";
import Button from "../Button/Button";
import "./item.css";

function Item(props) {
  const [isFavorite, setIsFavorite] = useState();

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  return (
    <div className="card">
      <div className="card-button-container">
        <button onClick={handleFavorite} className={classButtonFavorite}>
          ♥
        </button>
      </div>

      <div className="card-img">
        <img src={props.imgurl} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="priceTag">$ {props.price}</h4>
        <Button >Ver más {isFavorite? "de este producto en favoritos" : ""} </Button>
      </div>
    </div>
  );
}

export default Item;
