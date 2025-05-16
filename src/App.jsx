import { useEffect, useState } from 'react'
import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'

function App() {
  const [carts , setCarts] = React.useState([])
  const [products ,setProducts] = React.useState([])

  const fetchProducts= ()=>{
    fetch("http://localhost:8000/products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  const addToCard = (id , title,  price )=>{
    let idx = carts.findIndex(el => el.id === id)
    console.log(idx)
    if(idx === -1){
      let newItem = {
        id: id,
        title : title,
        price : price,
        quantity : 1
      }  
      setCarts([...carts , newItem])
    }else{
      const cloneCart = [...carts]
      cloneCart[idx].quantity += 1
      setCarts(cloneCart)
    }
  }

  const decQuantity = (id)=>{
    let idx = carts.findIndex(el => el.id === id)
    const cloneCart = [...carts]
    if (cloneCart[idx].quantity > 1 ){
      cloneCart[idx].quantity -= 1
    }else{
      cloneCart.splice(idx,1)
    }
    setCarts(cloneCart)

  }

  return (
    <div className='app min-h-screen flex flex-col'>
      <Header itemCount={carts.length}/>
      <div className='flex flex-1'>
        <ProductList products={products} addToCard={addToCard}/>
        <CartSummary carts={carts} decQuantity={decQuantity}/>
      </div>
    </div>
  )
}

export default App
