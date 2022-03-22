import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    
    return (
        <div>
            <div className="title">
                    <h5>Order Summery</h5>
                </div>
                <div className="body ta">
                    <p>Selected Items: </p>
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
    );
};

export default Cart;