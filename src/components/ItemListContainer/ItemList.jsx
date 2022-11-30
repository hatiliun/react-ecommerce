import React from 'react';
import Item from "../Item/Item";
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Loader from '../Loader/Loader';


function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <FlexWrapper>
            {
            emptyArray? 
              <Loader color="green" size={100} ></Loader>
            :
            
            props.productsList.map ( (product) => (
                <Item
                  key = {product.id}
                  title= {product.title}
                  price= {product.price}
                  detail ={product.detail}
                  thumbnail= {product.thumbnail}
                  stock= {product.stock}
                  product ={product}
                />
              ))
              }
      </FlexWrapper>
    
  );
}

export default ItemList;