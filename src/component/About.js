import React, { useState } from 'react'
import Navbar from './Navbar'

function About() {
  let time=new Date().toLocaleTimeString();
  const[ctime,setctime]=useState(time)
  const update=()=>{
    time=new Date().toLocaleTimeString();
    setctime(time)
    }
    setInterval(update,1000)
  return (
    <>
      <Navbar/>
      <div className='container about'>
      <h1 className='text-center mt-5'>Welcome to MyRestaurent</h1>
      <hr></hr>
      <p>A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.Restaurants provide you with different cuisines of food to satisfy your hunger.
The food preparation and presentation gives you a happy feel during your dull
The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
The restaurant is a life savior when one doesn’t feel like cooking or wants to eat something else.
You get to explore places when you plan to visit a restaurant.
The fast-food restaurant provides your meals on the go to save your time at affordable prices.
The restaurant is a place to enjoy your special occasions like Birthdays, Anniversaries, Achievements, etc.</p>
<p><b>Time:</b>{ctime}</p>
<div className='glr'>
<img src="image/res1.jpg" class="img-fluid" alt="..."/>
<img src="image/res2.jpg" class="img-fluid" alt="..."/>
<img src="image/res3.jpg" class="img-fluid" alt="..."/>
<img src="image/res1.jpg" class="img-fluid" alt="..."/>

</div>
      </div>
      
    </>
  )
}
export default About;