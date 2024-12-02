import ProductsCatalogue from './ProductsCatalogue';
import Products from '../resources/Products.json';
import Product from './Product';
import "./AllProducts.css";
import React, { useEffect } from "react";

function AllProducts() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);
    
    return <>
       <div className="all-produtcs-container">
            {/* <CatalogueHeader title={props.title} description={props.description} /> */}
            <div className="products all-products">
                {
                    Products.map((item, index) => {
                        return <Product item={item} key={index}></Product>
                    })
                }
            </div>
        </div>
    </>
}
export default AllProducts;