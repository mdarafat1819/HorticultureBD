import './CartProducts.css';

import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartProducts({product}) {
    return (
        <>
            <div className='cart-product'>
                <input type='checkbox' className='cart-product__checkbox'></input>
                <img className='cart-product__image' src='https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg'></img>
               
                <div className='cart-product__details' >
                    <h3 className='cart-product__name'>{product.name}</h3>
                    <h3 className='cart-product__farm-name'>উতপাদনকারী প্রতিষ্ঠানঃ রহিম এগ্রো ফার্ম</h3>
                    <div className='cart-product__price'><FaBangladeshiTakaSign />{product.price}</div>
                    <button className='cart-product__remove-btn'><RiDeleteBin5Line /></button>
                </div>

                <div className='cart-product__counter-btns'>
                    <button className='cart-product__decrement-btn'>-</button>
                    <span className='cart-product__total-items'>1</span>
                    <button className='cart-product__increment-btn'>+</button>
                </div>
                <span className='cart-product__total-price'><FaBangladeshiTakaSign />১৫০.০০</span>
            </div>
        </>
    );
}
export default CartProducts;