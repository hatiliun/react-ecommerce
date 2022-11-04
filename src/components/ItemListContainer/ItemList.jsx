import React from 'react';
import Item from "../Item/Item";
import FlexWrapper from '../FlexWrapper/FlexWrapper';


function ItemList(props) {
  return (
    <FlexWrapper>
            {props.productsList.map ( (product) => (
                <Item
                  key = {product.id}
                  title= {product.title}
                  price= {product.price}
                  detail ={product.detail}
                  imgurl= {product.thumbnail}
                  stock= {product.stock}
                  product ={product}
                />
              ))}
      </FlexWrapper>
    
  );
}

export default ItemList;