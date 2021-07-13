import React from 'react'
import data from '../data';
import Product from '../components/Product'

export default function HomeScreen(props) {
  const products = data.products;
  return (
    <div className="row center">
      {
        products &&
        products.map(product => (
          <Product key={product._id} product={product}/>
        ))
      }
      </div>
  )
}
