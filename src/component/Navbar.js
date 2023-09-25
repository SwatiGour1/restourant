import React from 'react'
import { Link } from 'react-router-dom'
// import Cart from './Cart'

export default function Navbar({cartItems}) {
  
  return (
    <>
 <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">MyRestaurant</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ac">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/menu">Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>

        </li>
      </ul>
      <button>
      </button>
    </div>
  </div>
</nav>
    </div>


    </>
  )
}
