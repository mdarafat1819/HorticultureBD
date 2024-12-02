import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';
import OrderDescription from './OrderDescription';
import PaymentMethod from './PaymentMethod';

function OrderConfirmation() {
    const navigate = useNavigate();
    return (
        <>
        <div className="order-confirm">
            <PaymentMethod />
            <OrderDescription />
            <br />
            <div className='order-confirm__confirm-btn-container'>
                <button onClick={()=>{navigate("/")}}>Confirm Order</button>
            </div>

        </div>
        </>
    );
}
export default OrderConfirmation;