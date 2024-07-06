
import './OurCommitment.css';

function OurCommitment({params}) {
   const {icon, descriptionHeader, description} = params;
 
    return (
        <div className='our-commitment'>
            <div className='our-commitment-icon-container'>
                <div className="our-commitment-icon">
                    {icon}
                </div>
            </div>
            <div className='our-commitment-description'>
                { <h1>{descriptionHeader}</h1> }
                { <span>{description}</span> }
            </div>
        </div>
    );
}
export default OurCommitment;