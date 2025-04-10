import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppcontextProvider = (props) => {
    const curreny = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

    const addToCart = (itemId, size) => {
        if(!size ) {
            toast.error("Please select size");
            return;
        }
       let cartData = structuredClone(cartItems);
       console.log(cartData);
       
       if(cartData[itemId]) {
          if(cartData[itemId][size]) {
            cartData[itemId][size] += 1; 
          } else {
            cartData[itemId][size] = 1;
          }
       } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
       }

       setCartItems(cartData);
    }


    const getCartCount =() => {
        let totalCount = 0;
        for(let itemId in cartItems) {
            for(let size in cartItems[itemId]) {
                try {
                   if(cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                   }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(let items in cartItems) {
            let cartInfo = products.find((product) => product._id === items);
            for(let size in cartItems[items]) {
                if(cartItems[items][size] > 0) {
                    totalAmount += cartInfo.price * cartItems[items][size];
                }
            }  
        } 
        return totalAmount;
    }

    const value = {
        products, curreny, delivery_fee , search, setSearch, showSearch, setShowSearch, cartItems
        , addToCart , getCartCount , updateQuantity ,getCartAmount , navigate
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )
}
export default AppcontextProvider;