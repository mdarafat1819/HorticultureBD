import { useEffect, useState } from 'react';

import './ProductsCatalogue.css';
import Product from './Product';
import { LiaCoinsSolid } from 'react-icons/lia';
import ArrowButton from './ArrowButton';
import CatalogueHeader from './CatalogueHeader';

function ProductsCatalogue(props) {
    const temp = [];
    for(let i = 0; i < props.items.length && i < 5; i++) {
        temp.push(props.items[i]);
    }
    const [productIndex, updateIndex] = useState(0);
    const [products, updateProducts] = useState([temp]);
    useEffect(()=>{
       // console.log(props.items.length, productIndex);
       // console.log("Use Effect from ProductCatalog");

        const updatedProducts = [];
        for(let i = 0; i < 5 && (productIndex + i) < props.items.length; i++) {
            //console.log(productIndex + i);
            updatedProducts.push(props.items[productIndex + i]);
        }
        updateProducts(updatedProducts);
        // console.log(products);
    },[productIndex]);

    const prevButtonHandler = () => {
        //console.log("prev button clicked");
        if(productIndex <= 4) {
            updateIndex(0);
            return;
        };
        updateIndex(prev => prev - 5);
    }

    const nextButtonHandler = () => {
        //console.log("Next Button Clicked");
        if(props.items.length <= 5) return;
        if(productIndex + 9 < props.items.length) {
            updateIndex(prev => prev + 5);
        }
        else {
            updateIndex(props.items.length - 5);
            return;
        }
    }
    return (
        <div className="catalogue-container">
            <CatalogueHeader title={props.title} description={props.description} />
            <div className="products">
                {
                    products.map((item, index) => {
                        return <Product item={item} key={index}></Product>
                    })
                   
                }
            </div>
            <div className='view-all-btn'>
            <button type="submit">View All</button>
            </div>
            <ArrowButton direction={"right"} handler={nextButtonHandler}/>
            <ArrowButton direction={"left"} handler={prevButtonHandler} />
           
        </div>
    );
}
export default ProductsCatalogue;