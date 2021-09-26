import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let total = 0
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
            <h3>Order Summery</h3>
            <h4>item Order : {props.cart.length}</h4>
            <p>total: {total}</p>
        </div>
    );
};

export default Cart;