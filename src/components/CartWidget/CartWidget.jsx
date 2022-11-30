import React, {useContext} from 'react'
import cartContext from '../../storage/CartContext';
import {Link} from "react-router-dom";

// 6. Para consumir el context importamos el cartContext y el hook useContext()

function CartWidget() {
  // 7. Invocamos useContext (contexto) y recibimos el VALUE del provider

  const {totalItemsInCart} = useContext(cartContext);

  return (
      <div>
        <Link to="/cart"> 
        <div>
          <img className="logoCarrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="imagenCarrito" />
        </div>
        </Link>
        <small>
        {
        totalItemsInCart() > 0 ? 
        <>
        <span>{totalItemsInCart()} </span>
        </>
        : <></>
        }
        </small>
      </div>
  );
}

export default CartWidget;