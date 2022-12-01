import React from 'react';
import Button from '../Button/Button';
import "./checkout.css";
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="checkout">
        <div><h1>Gracias por su compra !!</h1></div>
        <div><img src='https://emojigraph.org/media/joypixels/star-struck_1f929.png'></img></div>
        <Link to="/"> 
        <div><Button>Volver al catalogo</Button></div>    
        </Link> 
    </div>
  )
}

export default Checkout