import React from 'react'

const AddToCart = ({ product }) => {

    // console.log(product);
    

  return (
    <div>
    {product ? (
      <div>
        <h2>Cart</h2>
        <p>Product ID: {product.id}</p>
        <p>Product Name: {product.discription}</p>
        <p>Product Price: ${product.saveMoney}</p>
      </div>
    ) : (
      <p>No product in cart</p>
    )}
  </div>
  )
}

export default AddToCart