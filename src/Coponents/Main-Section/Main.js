import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Main.css'

const Main = () => {

    const [products , setProducts] = useState([])
    useEffect (() => {
        fetch("Products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='container col-sm-12 mt-5' >
            <div className=" products col-md-8 ">
            {
                products.map(product => <Products key = {product.id} product= {product} > </Products> )
            }
            </div>
            <div className="col-md-4">
                <h1>  </h1>

            </div>
        </div>
    );
};

export default Main;