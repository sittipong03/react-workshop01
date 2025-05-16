import React from 'react'
import CardItem from './CartItem'

function CartSummary(props) {
  const {carts , decQuantity} = props
  return (
    <div className='w-1/3 bg-emerald-700'>
      <h2 className='border text-2xl rounded-2xl text-slate-600 p-2 m-2'>CartItems : </h2>
      <div className='flex flex-col gap-2'>
        {
          carts.map(el => <CardItem key={el.id} cardItem={el} decQuantity={decQuantity}/>)
        }
      </div>
      {/* <pre>{JSON.stringify(carts , null ,2)}</pre> */}
    </div>
  )
}

export default CartSummary