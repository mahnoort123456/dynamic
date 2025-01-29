import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart = () => {

    const { showCart, setShowCart} : any = useContext(CartContext);
    const handleClose = () => {
        setShowCart(!showCart);
    }
  return (
    <div id="cart" className='cart-wrapper'>
        <div className='cart-container'>
            <button className='cart-heading' onClick={handleClose}>
                <AiOutlineLeft/>
                <span className='heading'>Your Cart</span>
                <span className='cart-num-items'>0</span>
            </button>
        </div>
    </div>
  )
}

export default Cart