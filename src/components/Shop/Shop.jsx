import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products, setProducts] = useState([])
   const [cart,setCart] = useState([])
   useEffect(()=>{
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
},[]);
 
const handelerAddToCart =(product) =>{
    const newCart = [...cart, product];
    setCart(newCart);
}

    return (
        <div className='shop-components'>
            <div className="product-container">
               {
                products.map(product => <Product 
                    key ={product.id} 
                    product ={product}
                    handelerAddToCart ={handelerAddToCart}>
                    </Product>)
               }
            </div>
            <div className="cart-container">
                  <h3>order container</h3>
                  <p>Selected Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;