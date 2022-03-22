import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



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
        console.log(cart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(p=> <Product product={p} key={p.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart product={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;