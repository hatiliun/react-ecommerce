import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import "../Item/item.css";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id).then((itemsDB) => {
      setProduct(itemsDB);
    }).catch(error => alert(error));
    
  }, [id]);

  return (
    <div className="flex">
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.detail}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
    </div>
    </div>
  );
}

export default ItemDetailContainer;
