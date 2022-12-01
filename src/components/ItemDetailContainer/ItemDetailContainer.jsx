import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../services/firebase";
import "../Item/item.css";
import {useParams} from "react-router-dom";
import ItemDetail from "./itemDetail";
import Loader from "../Loader/Loader";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let id = useParams().id;


  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
      setProduct(itemsDB);
    })
    .catch((error) => {
    console.error(error)
  }) 
  .finally ( () => 
    setIsLoading (false))   
  }, [id]);


  if (isLoading) return (
  <FlexWrapper>
  <Loader color="green" size={100}/>
  </FlexWrapper>
  )
  return (
    <div className="flex">
    <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
