import React from 'react'

function ProductCard(props) {
  const [showDesc , setShowDesc] = React.useState(false)
  const  { addToCard , productItem : {id , category , description , title , image , price ,rating}} = props
  return (
    <div className="card bg-base-100 w-70 shadow-sm">
      <figure className='h-40 mt-4'>
        <img className='h-full'
          src={image}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <p className={`cursor-pointer ${showDesc? '': 'line-clamp-2'}`} onClick={()=>setShowDesc(prv=>!prv)}>{description}</p>
        <div className="card-actions justify-between items-center ">
          <div className='text-2xl font-bold'>${price}</div>
          <button onClick={()=>addToCard(id,title,price)}className="btn btn-primary mt-2">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard