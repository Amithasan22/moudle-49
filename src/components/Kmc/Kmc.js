import React from 'react';
import './Kmc.css'
const Kmc = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product
    return (
        <div className='product-cart'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 >{name}</h4>
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)}>add to cart</button>
            </div>


        </div>
    );
};

export default Kmc;