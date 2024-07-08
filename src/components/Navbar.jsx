import { FaCartPlus, FaSignInAlt, FaSearch} from "react-icons/fa";
import './Navbar.css';

function NavBar({cartItem}) {

    return <>
        <nav>
        <a href="#" className="site-name">Horticulture BD</a>
            <div className="search-container">
            
            <input type="search" id="search_input" placeholder="Search..."></input>
            <button ><FaSearch /></button>
            </div>
           <div className="cart">
           <button type="button" id="cart_btn"><FaCartPlus className="icon" /> Cart</button>
           {cartItem.length ? <div className="cart__item-counter">
            {cartItem.length}
           </div> : <div></div>
           }
           
           </div>
            <button type="button" id="login_btn"><FaSignInAlt className="icon"/> Log In</button>
        </nav>
    </>

}
export default NavBar;