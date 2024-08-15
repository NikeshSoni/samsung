import React from 'react';
import { useState } from 'react';

const AddToCart = ({ cartData, onUpdateQuantity , onRemoveFromCart }) => {
  console.log(cartData);


  const handleQuantityChange = (productId, increment) => {
    const product = cartData.find((item) => item.id === productId);
    const newQuantity = product.quantity + increment;
    if (newQuantity >= 1) {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  const calculateTotalAmount = () => {
    return cartData.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div className='fixed-car'>
      <div className="offcanvas offcanvas-end" tabindex="-1"
        id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Collenction</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cartData.length > 0 ? (
            cartData.map((product) => (
              <div key={product.id} className='d-flex'>

                <div className='text-center'>
                  <img style={{ width: "100%" }} src={product.image} />
                </div>

                <div>
                  <p className='p-0 m-0' style={{ fontSize: ".9rem", fontWeight: "600" }}> {product.heading}</p>
                  {/* <p className='mt-2 mb-1' style={{ fontSize: ".9rem", fontWeight: "600" }}>${product.price}</p> */}
                  <p className='mt-2 mb-1' style={{ fontSize: ".9rem", fontWeight: "600" }}>${calculateTotalAmount()}</p>


                  <div className='d-flex gap-4 align-items-center'>
                    <button onClick={() => handleQuantityChange(product.id, -1)}>
                      -
                    </button>
                    <h6>{product.quantity}</h6>
                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className='mx-2'>
                  <h4  onClick={() => onRemoveFromCart(product.id)} className='cursor-pointer'>X</h4>
                </div>

              </div>
            ))
          ) : (
            <p>No products in cart</p>
          )}

          {/* {cartData.length > 0 ? (
            cartData.map((product) => (
              <div key={product.id}>
                <p>
                  {product.name} - ${product.price} x {product.quantity}
                </p>
                <button onClick={() => handleQuantityChange(product.id, -1)}>
                  -
                </button>
                <button onClick={() => handleQuantityChange(product.id, 1)}>
                  +
                </button>
              </div>
            ))
          ) : (
            <p>No products in cart</p>
          )} */}
        </div>
      </div>

    </div >
  )
}

export default AddToCart