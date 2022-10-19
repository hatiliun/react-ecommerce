
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function NavBar() {
    return(
        <>
            <div className="navbarCss">
                <a href="#"><img className="imgLogo" src="/img/logocompumax.png" alt="imagenlogo" /></a>
                <ul className="ulEnlaces">
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Mi cuenta</a>
                    </li>
                     <li>
                        <a href="#"><CartWidget></CartWidget></a>
                    </li> 
                </ul>
                
            </div>
        </>
    )
}

export default NavBar;