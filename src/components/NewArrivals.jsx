import './CatalogueHeader';
import CatalogueHeader from './CatalogueHeader';
import './NewArrival.css';

function NewArrivalItem() {
    return (
        <>
        <div className='new-arrival-item'>
            <div className='new-arrival-item__image'>

            </div>
            <div className='new-arrival-item_description'>
                <h2>PlayStation 5</h2>
                <span>Black and White version of the PS5 Comming out on sale.</span>
                <a href='#'>Shop Now</a>
            </div>
        </div>
        </>
    );
}

function NewArrival() {
    return (
        <>
        <CatalogueHeader title={"Featured"} description={"New Arrival"}/>
        <div className='new-arrival'>
            <NewArrivalItem />
        </div>
        </>
    );
}
export default NewArrival;