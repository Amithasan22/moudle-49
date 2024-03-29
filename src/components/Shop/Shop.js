import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Kmc from '../Kmc/Kmc';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)


    }
    return (
        <div className="shop-container">
            <div className='product-container'>
                <h3>Product: {products.length}</h3>

                {
                    products.map(product => <Kmc
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Kmc>)


                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;