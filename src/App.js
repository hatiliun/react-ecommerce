import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import CartView from "./components/CartView/CartView";
import {getSingleItemFromAPI} from './services/firebase';
import Checkout from "./components/Checkout/Checkout";

// testDatabase();
function App() {
  getSingleItemFromAPI("teK1IdgZYoVh61G17G6Z");

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout/:orderid" element={<Checkout/>} />
            <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
            
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
