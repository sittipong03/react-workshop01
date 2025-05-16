import React from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {products , addToCard} = props
  return (
    <div className='w-2/3 bg-cyan-500 '>
    <h2 className='border text-2xl rounded-2xl text-slate-600 p-2 m-2'>ProductList</h2>
    <div className='flex flex-wrap gap-2 ps-2'>
    {products.map( el =>(
      <ProductCard key={el.id} productItem={el} addToCard={addToCard}/>
    ))
    }
    </div>
    </div>
  )
}

export default ProductList