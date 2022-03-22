import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    function addToCart(product){
        setCart(product);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(p=> <Product product={p} key={p.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className="title">
                    <h5>Order Summery</h5>
                </div>
                <div className="body">
                    <p>Selected Items: </p>
                    <p>Total Price: $100 </p>
                    <p>Total Shipping Charge: $5 </p>
                    <p>Tax: $5 </p>
                    <p>Grand Total: $5 </p>
                </div>
                <div className="button">
                    <button className='clear-btn'>Clear Cart</button>
                    <button className='review-btn'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;