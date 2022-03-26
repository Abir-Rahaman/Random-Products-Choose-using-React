import React from 'react';
import './Products.css'

const Products = (props) => {
    const {picture , name , price  } =props.product

    return (
        <div className='col-md-12 product' >
            <img className='w-75' src={picture} alt="" /> 
            <h4> {name} </h4>
            <h5> Price : $ {price} </h5>
            <div className="btn">
                <button> Add To Cart </button>
            </div>
        </div>
    );
};

export default Products;