import React from 'react'
// import './CheckoutProduct.css'
function CheckoutProduct({image,title,price,rating}) {
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
        </div>
    </div>
  )
}

export default CheckoutProduct
