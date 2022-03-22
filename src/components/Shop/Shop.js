import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Shop = () => {
    // =====useState for Cart=====
    const [cart, setCart] = useState([])

    // =====useState for Product=====
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    function addToCart(product){
        const newCart = [...cart, product]
        setCart(newCart);
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
                <div className="body ta">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $100 </p>
                    <p>Total Shipping Charge: $5 </p>
                    <p>Tax: $5 </p>
                    <p>Grand Total: $5 </p>
                </div>
            
                <div className="button">
                    <button className='clear-btn'>Clear Cart
                    <FontAwesomeIcon icon={faTrash} className='icon'></FontAwesomeIcon>
                    </button>
                    <button className='review-btn'>Review Order
                    <FontAwesomeIcon icon={faAngleRight} className='icon'></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;