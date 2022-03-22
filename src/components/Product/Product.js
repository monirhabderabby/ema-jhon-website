import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name,category,id,img,price}=props.product
    return (
        <div className='card'>
            
                <img src={img} alt="" />
                <p className='p-name'>{name}</p>
        </div>
    );
};

export default Product;