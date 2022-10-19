import React from "react";
import Item from "../Item/Item";
import FlexWrapper from "../FlexWrapper/FlexWrapper";


function ItemList() {
  return (
        <FlexWrapper>
            
            <Item imgurl="/img/gpu1.png" title="Producto 1" detail="Aqui va detalle del producto" price={15000}/>
            <Item imgurl="/img/gpu2.png" title="Producto 2" detail="Aqui va detalle del producto" price={20000}/>
            <Item imgurl="/img/gpu3.png" title="Producto 3" detail="Aqui va detalle del producto" price={25000}/>
            <Item imgurl="/img/gpu4.png" title="Producto 4" detail="Aqui va detalle del producto" price={15000}/>
            <Item imgurl="/img/gpu5.png" title="Producto 5" detail="Aqui va detalle del producto" price={20000}/>
            <Item imgurl="/img/gpu6.png" title="Producto 6" detail="Aqui va detalle del producto" price={25000}/>
        </FlexWrapper>
    
  );
}

export default ItemList;
