import { FaRegStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

import './Product.css';
import { useState } from "react";

function Product({item, handler}) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
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
                    handler(item);
                    setIsAddedToCart(true);
                }}
                >Add To Cart</button>
            }
        </div>
    );
}
export default Product;