import React from 'react'

const Gallery=({ product, onAddToCart })=> {
  return (
    <>
     <div className='special' style={{backgroundColor:"black"}}>
<h1 className='text-center text-light pt-4'>Special Items</h1>
<div className='row glrry ms-3'>
  {
    product.map((p)=>{
      return(
      <div class="card m-3" style={{width:"18rem"}} index={p.id}>
  <img src={p.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{p.title}</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <button class="btn btn-primary">{p.name}</button> */}
    <button onClick={() => onAddToCart(product)}>{p.name}</button>

  </div>
</div>
      )
  })
  }
</div>
      </div>
    </>
  )
}

export default Gallery