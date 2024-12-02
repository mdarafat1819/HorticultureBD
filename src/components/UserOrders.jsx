import './UserOrders.css';

function UserOrders() {
    return <>
    <div className="user-orders">
        <h2>Your Order ID: 123457</h2>
        <div className="user-orders__btn-container">
            <button>Processing</button>
            <button>Track My Order</button>
        </div>
        <hr />
        <div className="user-orders__product-container">
            <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg"></img>
            <div className="user-orders__product-description">
                <h2 >Amra planet</h2>
                <span>Rahim Agro</span>
                <span>100TK</span>
            </div>
            <span>Qty: 10</span>
            <span>TK. 200</span>
        </div>
        <div className="user-orders__product-container">
            <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg"></img>
            <div className="user-orders__product-description">
                <h2 >Amra planet</h2>
                <span>Rahim Agro</span>
                <span>100TK</span>
            </div>
            <span>Qty: 10</span>
            <span>TK. 200</span>
        </div>
        <div className="user-orders__product-container">
            <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg"></img>
            <div className="user-orders__product-description">
                <h2 >Amra planet</h2>
                <span>Rahim Agro</span>
                <span>100TK</span>
            </div>
            <span>Qty: 10</span>
            <span>TK. 200</span>
        </div>
       

    </div>
    </>
}
export default UserOrders;