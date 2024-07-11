import { FaRegStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

import './Product.css';
import { useContext, useState } from "react";
import { CartContext } from "./Context";

function Product({item}) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const {_, cartItemHandler} = useContext(CartContext);

    return (
        <div className="product">
            <img src={item.image}  className="product__image"/>
            <span className="product__name">{item.name}</span>
            <span className="product__age">বয়স: {item.age}, উচ্চতা: {item.height}</span>
            <span className="product__price"><FaBangladeshiTakaSign />{item.price}</span>
            <span className="product__rating-icon">
                {Array(5).fill(<FaRegStar />)}(80)
            </span>
            {
                isAddedToCart ? <button type="submit" className="product__goto-cart-btn">Go To Cart</button>
                : 
                <button type="submit" className="product__cart-btn" 
                onClick={() => {
                    console.log(item.key);
                    cartItemHandler(item);
                    setIsAddedToCart(true);
                }}
                >Add To Cart</button>
            }
        </div>
    );
}
export default Product;