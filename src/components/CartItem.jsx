import React from 'react'

function CartItem(props) {
  const {decQuantity , cardItem : {id ,title ,price ,quantity }} = props
  console.log(title)
  return (
    <div className=' flex justify-between p-1'>
      <p>{title.split(' ')[0] +" "+ title.split(' ')[1]}</p>
      <div className='flex gap-1'>
        <p className='border rounded-sm w-5 h-5 flex justify-center items-center cursor-pointer'
        onClick={()=>decQuantity(id)}
        >-</p>
        <p className='border rounded-sm w-5 h-5 flex justify-center items-center cursor-pointer'>+</p>
      </div>
      <p>{quantity} * 1000</p>
    </div>
  )
}

export default CartItem