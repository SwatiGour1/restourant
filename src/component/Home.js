import React,{useState} from 'react'
import Navbar from './Navbar'
import Gallery from './Gallery'
import Cart from './Cart';
import products from './Product'
export default function Home() {
  const [cartItems, setCartItems] = useState(products);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("add to cart")
  };
  return (
    <>
      <Navbar/>
      <div className='homs'>

<div class="card bg-dark text-white">
  <img src="image/food1.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title quote">"Laughter is brightest in the place where food is good."</h5>
    <p class="card-text sp">Best Food In India</p>
    <p class="card-text btn">Order Now</p>
  </div>
</div>
      </div>
      {/* <Gallery></Gallery> */}
      <Gallery product={products} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} />

      {/* <div className='special' style={{backgroundColor:"black"}}>
<h1 className='text-center text-light pt-4'>Special Items</h1>
<div className='row glrry ms-3'>
  {
    products.map((product)=>{
      return(
      <div class="card m-3" style={{width:"18rem"}} index={product.id}>
  <img src={product.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <button class="btn btn-primary">{product.name}</button>
  </div>
</div>
      )
  })
  }
</div>
      </div> */}
    </>
  )
}
