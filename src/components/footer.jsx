import './Footer.css'
import { IoMdSend } from "react-icons/io";

function Footer() {
    return(
        <>
        <footer>
            <div className="footer">
                <h2>Exclusive</h2>
                <h3>Subscribe</h3>
                <span>Get 10% off your first order</span><br></br>
                   <div id="subscriber_container" >
                   <div><input type="text" placeholder="Enter Your E-mail"></input></div>
                   <div><button ><IoMdSend className='input-icon'/></button></div>
                   </div>
            </div>

            <div className="footer">
                <h2>Support</h2>
                <address>
                    BSMRSTU Campus, Gopalganj Sadar, Dhaka, Bangladesh <br />
                    <span className="contact">
                        support@horticulturebd.com <br />
                    </span>
                    <span className="contact">
                       +8801518752623
                    </span>
                </address>
            </div>

            <div className="footer">
                <h2>Account</h2>
                <ul className="list">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Login/Register</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>

            <div className="footer">
                <h2>Quick Link</h2>
                <ul className='list'>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
            
        </footer>
        <div className='bottom-nav'>
               <a href="#"> Developer Team</a> <span className='blank'></span>
               &copy; Copyright <a href="#">horticulturebd.com</a>
            </div>
        </>

    );
}
export default Footer;