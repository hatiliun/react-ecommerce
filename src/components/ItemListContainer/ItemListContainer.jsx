import React, {useState, useEffect} from 'react';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import getItemsFromAPI, {getItemsFromAPIByCategory} from '../../mockService/mockService';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";


function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const {categoryid} = useParams();
  
  useEffect(() => {
        if (categoryid)
        getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
       });
       else{
        getItemsFromAPI().then((itemsDB) => {
          setProductsList(itemsDB);
       });
    }
  }, [categoryid]);

  return (
    <div>
        <FlexWrapper>
            <ItemList productsList = {productsList} />
        </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;