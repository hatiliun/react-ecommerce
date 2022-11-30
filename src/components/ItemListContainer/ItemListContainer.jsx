import React, {useState, useEffect} from 'react';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';

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