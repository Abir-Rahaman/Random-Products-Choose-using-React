import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    return (
        <div className='cart' >
            <div className="">
            
             <h5 className='p-3'> Products Name:  {props.name} </h5>
             </div>
             
        </div>
    );
};

export default Cart;