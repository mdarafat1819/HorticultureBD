import { useContext } from 'react';
import CartProducts from './CartProducts';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import NavBar from './Navbar';
import './OrderPage.css';
import {CartContext} from './Context'


function OrderPage() {
    const {cartItem, cartItemHandler} = useContext(CartContext);
    console.log(cartItem);
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
                        <span style={{fontWeight: "bold"}}>Subtotal: </span>
                        <FaBangladeshiTakaSign />{1500}
                    </div>
                </div>

                <div className="order__description">
                    <div className='order__address'>
                        <div className='order__address-text'>
                            <h2>Shipping Address</h2>
                            <hr />
                            <span>শেখ রাসেল হল, বশেমুরবিপ্রবি, গোপালগঞ্জ সদর, গোপালগঞ্জ - ৮১০০</span>
                            <br />
                        </div>
                        <button >Update Address</button>
                    </div>
                    <div className='order__checkout-summery'>
                        <table>
                            <caption>Checkout&nbsp;Summery</caption>
                            <tr><td colSpan={2}><hr /></td></tr>
                            <tr>
                                <td>Subtotal</td>
                                <td style={{ textAlign: "right" }}>1500TK.</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td style={{ textAlign: "right" }}>70TK.</td>
                            </tr>
                            <tr><td colSpan={2}><hr /></td></tr>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>Total</td>
                                <td style={{ textAlign: "right" }}>1570TK.</td>
                            </tr>
                        </table>
                    </div>
                    <div className='order__advertise'>
                        <span>
                            ক্যাশ অন ডেলিভারি <br />
                            ৭ দিনের মধ্যে পন্য ফেরত সুবিধা<br />
                            ১০০% টাকা ফেরত গ্যারান্টি<br />
                            অর্ডার করে পয়েন্টস জিতুন<br />
                            ১০০% অরিজিনাল প্রোডাক্ট<br />
                        </span>
                    </div>
                </div>
                <br></br>
                <div className='order__place-order-btn-container' >
                    <button>
                        Place Order
                    </button>
                </div>
            </div>
        </>
    );
}
export default OrderPage;