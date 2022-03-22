import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    function addToCart(product){
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(p=> <Product product={p} key={p.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                
            </div>
        </div>
    );
};

export default Shop;