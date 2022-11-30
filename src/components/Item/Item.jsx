import React, { useState } from "react";
import Button from "../Button/Button";
import "./item.css";
import {Link} from "react-router-dom";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState();

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`
  let stylePrice = {color: product.discount? 'green' : 'inherit'};

  return (
    <div className="card">
      <div className="card-button-container">
        <button onClick={handleFavorite} className={classButtonFavorite}>
          ♥
        </button>
      </div>
      <div className="card-img">
      <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.detail}</p>
        {     
        product.discount? 
        <h4 className="offer">Descuento: {product.discount}%</h4> : <></>
        }
        <h4 style={stylePrice} className="priceTag">$ {product.price}</h4>
        <Link to ={urlDetail}> 
        <Button >Ver más {isFavorite? "de este producto en favoritos" : ""} </Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;


// import React, { useState, useEffect } from "react";
// import { getSingleItemFromAPI } from "../../mockService/mockService";
// import "../Item/item.css";

// function ItemDetailContainer() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     getSingleItemFromAPI().then((itemsDB) => {
//       console.log(itemsDB);
//       setProduct(itemsDB);
//     });
//   }, []);

//   return (
//     <div className="card">
//       <div className="card-img">
//         <img src={product.thumbnail} alt="Product img" />
//       </div>
//       <div className="card-detail">
//         <h2>{product.title}</h2>
//         <p>{product.detail}</p>
//         <h4 className="priceTag">$ {product.price}</h4>
//       </div>
//     </div>
//   );
// }

// export default ItemDetailContainer;
