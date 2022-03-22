import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,category,id,img,price,seller, ratings}=props.product
    return (
        <div className='card'>
            
                <img src={img} alt="" />
                <p className='p-name'>{name}</p>
                <div className='card-body'>
                
                <p>Price: ${price}</p>
                <p><small>Manufaturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
                </div>
                <button className='card-btn' onClick={()=>props.addToCart(props.product)}>Add To Cart
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;