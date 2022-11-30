import { createContext, useState } from "react"

// 1- Inicializamos el context con createContext

const cartContext = createContext();

// 2- Definimos nuestro provider

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(itemData) {
        let itemFound = cart.find( itemInCart => itemInCart.id === itemData.id)
        
        if(itemFound){
            let newCart = cart.map (itemInCart => {
                if (itemInCart.id === itemData.id){
                     itemInCart.count += itemData.count;
                     return itemInCart;
                }
                else{
                    return itemInCart;
                }
            })
            setCart(newCart);
        }   else
        {
        const newCart = [...cart];
        newCart.push(itemData);
        setCart (newCart);
        }
      
           /* setCart((newCart) => {
                newCart.push(itemData);
                return newCart; 
            });
        }*/
    }

    function totalItemsInCart() {
        let total = 0;
        cart.forEach ((itemInCart) => {
            total = total + itemInCart.count;
        });
        return total;
    }
    function totalPriceInCart() {
        let totalPrice = 0;
        cart.forEach ((itemInCart) => {
            totalPrice = totalPrice + itemInCart.count * itemInCart.price;
        });
        return totalPrice;
    }

    function removeItem(itemId) {
        console.log("Removiendo el item", itemId);
    }

    function clear() {
        setCart([])
    }


    const value = {
        cart,
        addToCart,
        totalItemsInCart,
        removeItem,
        totalPriceInCart,
        clear
    };

    // 3- Pasamos al provider el "value" para los componentes que consuman el context

    return (
    // 4- retornamos el Context Provider con el value creado
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    )
    

}

export default cartContext;