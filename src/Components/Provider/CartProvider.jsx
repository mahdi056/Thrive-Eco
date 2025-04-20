import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const {user} = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);


    const fetchCart = async () => {
      
        try {
          const res = await axios.get(`http://localhost:5000/cart?email=${user.email}`);
          setCartItems(res.data);
        } catch (err) {
          console.error("Failed to fetch cart items", err);
        }
      };


      const addToCart = async (product) => {
        if (!user?.email) return;
        const cartItem = {
          ...product,
          userEmail: user.email,
          productId: product._id,
        };
    
        try {
          await axios.post("http://localhost:5000/cart", cartItem);
          setCartItems((prev) => [...prev, cartItem]);
        } catch (err) {
          console.error("Failed to add item", err);
        }
      };


      useEffect(() => {
        fetchCart();
      }, [user]);

    const value = {
        cartItems,
        addToCart,
        fetchCart

    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;