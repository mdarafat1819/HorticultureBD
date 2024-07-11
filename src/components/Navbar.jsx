import { FaCartPlus, FaSignInAlt, FaSearch } from "react-icons/fa";
import './Navbar.css';
import { useContext } from "react";
import { CartContext } from "./Context";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const { cartItem, cartItemHandler } = useContext(CartContext);
    console.log(cartItem);
    const navigate = useNavigate();
    return <>
        <nav>
           <a href="/" className="site-name">Horticulture&nbsp;BD</a>
            <div className="search-container">

                <input type="search" id="search_input" placeholder="Search..."></input>
                <button ><FaSearch /></button>
            </div>
            <div className="cart" onClick={
                () => {
                    navigate("/order-page");
                }
            }>
                <button type="button" id="cart_btn"><FaCartPlus className="icon" /> Cart</button>
                {cartItem.length ? <div className="cart__item-counter">
                    {cartItem.length}
                </div> : <div></div>
                }

            </div>
            <button type="button" id="login_btn"
                onClick={() => {
                    navigate("/login");
                }}
            ><FaSignInAlt className="icon" /> Log In</button>
        </nav>
    </>

}
export default NavBar;