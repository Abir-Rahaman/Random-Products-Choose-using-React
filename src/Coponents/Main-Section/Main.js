import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Main.css'

const Main = () => {

    const [products , setProducts] = useState([])
    const [cart , setCart] = useState([])
    useEffect (() => {
        fetch("Products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)


   
    }
    return (
        <div className='container col-sm-12 mt-5 d-flex' >
            <div className=" products col-md-8 ">
            {
                products.map(product => <Products key = {product.id} product= {product} addToCart={() =>addToCart(product)}  > </Products> )
            }
            
            </div>
            <div className="col-md-4 text-center ms-5">
               
             
                <div className="cart">
                {

                    cart.map(item => <Cart cart={cart} key={item.id} name={item.name }> </Cart>)
                }
            </div>

            </div>
        </div>
    );
};

export default Main;