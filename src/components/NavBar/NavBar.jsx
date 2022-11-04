import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
      <div className="navbarCss">
        <Link to="/">
          <img
            className="imgLogo"
            src="/img/logocompumax.png"
            alt="imagenlogo"
          />
        </Link>
          <nav className="ulEnlaces">
            
              <Link to="/">Mi tienda</Link>
              <Link to="/category/Placas de video">Placas de video</Link>
              <Link to="/category/Procesadores">Procesadores</Link>
              <Link to="#"><CartWidget></CartWidget></Link>
            
        </nav>
      </div>
  );
}

export default NavBar;
