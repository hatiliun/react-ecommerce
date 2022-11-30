import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './itemdetail.css'
import cartContext from "../../storage/CartContext";
import {Link} from "react-router-dom";


function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  
  const {cart, addToCart} = useContext(cartContext);
  
  let itemInCart = cart.find(item=> product.id === item.id)
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;


  // const navigate = useNavigate();
  function onAddToCart(count) {
    // Swal.fire({
    //   title: `Agregadas ${count} unidades de ${product.title} al Carrito`,
    //   text: "¿Deseas ir al carrito?",
    //   icon: "success",
    //   confirmButtonText: "Ir al carrito",
    // }).then((result) => {
      
    //   if (result.isConfirmed) {
    //     navigate("/cart");
    //   }
    // });

    const itemForCart = {
      ...product,
      count
    }
 
    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="card-item-detail">
      <div className="card-item-detail-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-item-detail-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {!isInCart ? (

        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={stock}
        />

      ) : (
        <div>
          <Link to="/cart">
          <button>Ir al Carrito</button>
          </Link>
          <button>Volver al catálogo</button>
          <button>Quitar del carrito</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;