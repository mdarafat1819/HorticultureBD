import { useContext, useState } from 'react';
import CartProducts from './CartProducts';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import NavBar from './Navbar';
import './OrderPage.css';
import { CartContext } from './Context'
import PaymentMethod from './PaymentMethod';
import OrderDescription from './OrderDescription';
import { useNavigate } from 'react-router-dom';


function OrderPage() {
    const { cartItem, cartItemHandler } = useContext(CartContext);
    console.log(cartItem);
    const navigate = useNavigate();
    return (
        <>
            <div className="order">
                <div className='order__items'>
                    <h2 className='order__header'>Select Product List:</h2>
                    {
                        cartItem.map((item, index) => {
                            return <CartProducts product={item} key={index}></CartProducts>
                        })
                    }
                    <div className='order__subtotal-price'>
                        <span style={{ fontWeight: "bold" }}>Subtotal: </span>
                        <FaBangladeshiTakaSign />{1500}
                    </div>
                </div>
                {
                    <OrderDescription />
                }
                <br></br>
                <div className='order__place-order-btn-container' >
                    <button onClick={() => {
                        navigate("/confirm-order");
                    }}>
                        Place Order
                    </button>
                </div>
            </div>
        </>
    );
}
export default OrderPage;