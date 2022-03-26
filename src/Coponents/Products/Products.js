import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const {addToCart} = props;
    const {picture , name , price  } =props.product;

    return (
        <div className='col-md-12 product' >
            <img className='w-75' src={picture} alt="" /> 
            <h4> {name} </h4>
            <h5> Price : $ {price} </h5>
            <div className="btn">
            <button onClick={addToCart} > Add To Cart <FontAwesomeIcon className='ms-1' icon={faShoppingCart}> </FontAwesomeIcon> </button>    
            </div>
        </div>
    );
};

export default Products;