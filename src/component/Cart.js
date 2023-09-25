import React from 'react';

const Cart = ({cartItems}) => {
    
  return (
    <div>
      <h2>Shopping Cart</h2>
     
      <>
        {
            cartItems.map((item,index)=>{
                return(
                    <>
                    <ul key={index}>
                        <li>{item.title}</li>
                    </ul>
                    </>
                )
            })
        }
      </>
    </div>
  );
};

export default Cart;
