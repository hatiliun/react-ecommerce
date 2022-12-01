import React, {useState} from "react";
import Button from "../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
    const [count, setCount] = useState(1);
  
    function handleAdd(evt) {
      if (count < stock) setCount(count + 1);
    }
  
    function handleSubstract(evt) {
      if (count > 1) setCount(count - 1);
    }
  
    return (
      <div className="itemcount_container">
        <div className="itemcount_control">
          <button className="button-substract" onClick={handleSubstract}>
            -
          </button>
          <span>{count}</span>
          <button className="button-add" onClick={handleAdd}>
            +
          </button>
        </div>
        <div className="itemcount_btns">
          <Button type="alert" onClick={() => onAddToCart(count)}>{text}</Button>
        </div>
      </div>
    );
  }
  
  export default ItemCount;