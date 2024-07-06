import { TbTruckDelivery } from "react-icons/tb";
import { BsShieldCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import OurCommitment from "./OurCommitment";
import './OurCommitments.css'

function OurCommitments() {
    const commitments = [
        {
            icon : <TbTruckDelivery />,
            descriptionHeader: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over 150"
        },
        {
            icon: <BiSupport />,
            descriptionHeader: "24/7 Customer Service",
            description: "Friendly 24/7 customer support"
        },
        {
            icon: <BsShieldCheck />,
            descriptionHeader: "Money Back Guarantee",
            description: "We return money within 30 days"
        }
    ]
    return (
        <div className='our-commitments'>
            {commitments.map((commitment, index) => {
                return <OurCommitment params={commitment} key={index} />;
            })}
        </div>
    );
}
export default OurCommitments;