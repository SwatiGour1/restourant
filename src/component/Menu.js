import React, { useState } from 'react'
import Navbar from './Navbar'
import menu from './MenuItem'
function Menu() {
  const [items, setitem] = useState(menu)
  const filteritem = (categitem) => {
    const updateitem = menu.filter((curelem) => {
      return curelem.category === categitem;
    })
    setitem(updateitem);
  }
  return (
    <>
      <Navbar />
      <div className='container menu'>
        <div class="button-container mt-4">
          <button class="button" onClick={() => setitem(menu)}>All</button>
          <button class="button" onClick={() => filteritem('breakfast')}>Breakfast</button>
          <button class="button" onClick={() => filteritem('lunch')}>Lunch</button>
          <button class="button" onClick={() => filteritem('Dinner')}>Dinner</button>
        </div>
        <div className='cardgroup mt-3'>
          {
            items.map((Item) => {
              const { id, title, img } = Item;
              return (
                <div class="card" style={{ width: "18rem" }} id={id}>
                  <img src={img} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title text-center fw-bold">{title}</h5>
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

export default Menu