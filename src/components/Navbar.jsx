import { FaCartPlus, FaSignInAlt, FaSearch} from "react-icons/fa";
import './Navbar.css';

function NavBar() {

    return <>
        <nav>
        <a href="#" className="site-name">Horticulture BD</a>
            <div className="search-container">
            
            <input type="search" id="search_input" placeholder="Search..."></input>
            <button ><FaSearch /></button>
            </div>
            <button type="button" id="cart_btn"><FaCartPlus className="icon" /> Cart</button>
            <button type="button" id="login_btn"><FaSignInAlt className="icon"/> Log In</button>
        </nav>
    </>

}
export default NavBar;