import React, { useState } from "react";
import "./product.css"
import { useStateValue } from "./StateProvider";
function Product({title,image,price,rating}){
   // dispatching the item into the data layer
  const[{basket},dispatch]=useStateValue();


  const totalPrice = basket.reduce((sum, item) => {
    // Check if the item has a valid price
    if (item.price !== undefined) {
      return sum + item.price;
    }
    return sum;
  }, 0);
  
//   for(let i=0;i<basket.length;i++)
//   {
//     for(let ele of basket[i])
    
//         if(ele==='price')
//         {
// //            tprice=tprice+ele.val
// //         }
// //   }
//   }
    const addtobasket=()=>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return(
    <div className="product">
       <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
       </div>
       <img src={image}/>
       <button onClick={addtobasket}>Add to cart</button>
    </div>
    );
}
export default Product;