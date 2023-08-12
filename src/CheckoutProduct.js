import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBaset=()=>{
            dispatch({
                type: 'REMOVE_FROM_BASKET',

            })
    }
  return (
    <div className='checkoutproduct'> 
        <img className='checkoutproduct_image' src={image}/>
        <div className='checkoutproduct_info'>
            <p className='checkoutProduct_title'>
                {title}
            </p>
            <p className='checkoutproduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {
                    Array(rating).fill().map((_,i)=>(<p>⭐</p>))
                }
            </div>
            <button onClick={removeFromBaset}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
