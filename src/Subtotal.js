import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
function Subtotal() {
    const[{basket},dispatch]=useStateValue();
    const totalPrice = basket.reduce((sum, item) => {
        // Check if the item has a valid price
        if (item.price !== undefined) {
          return sum + item.price;
        }
        return sum;
      }, 0);
      
      console.log(totalPrice);
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
            <>
               <p>
                Subtotal({basket.length}): <strong>{value}</strong>
               </p>
            </>
        )}
        deximalScale={1}
        value={totalPrice}
        displayType='text'
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed To checkout</button>
    </div>
  )
}

export default Subtotal
