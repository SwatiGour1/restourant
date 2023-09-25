import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
function Contact() {
  const data={
    fname:"",
    lname:"",
    mobile:"",
    message:""
}
const[inputdata,setinputdata]=useState(data)
const handledata1=(e)=>{
    setinputdata({...inputdata,[e.target.name]:e.target.value})
}
const handledata=(e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
    .then((res)=>{
        console.log(res)
    alert(`welcome  ${inputdata.fname}${inputdata.lname}`)

    })
}
  return (
    <>
    <Navbar/>
    <div className='container contact'>
   <h1 className='text-center mt-5'>Contact With MyRestaurent</h1> 
   <hr></hr>
   <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio ullam ipsum veritatis enim, voluptatem quisquam quo facere voluptatibus amet error. Cum, magnam corrupti ex quae quasi reiciendis consequuntur nihil.</p>
 <form>
            <label className='fw-bold fs-5'>First Name:</label><br></br>
            <input type='text' placeholder='enter your first name' value={inputdata.fname} onChange={handledata1} name='fname'></input><br></br>
            <label className='fw-bold fs-5'>Last Name:</label><br></br>

            <input type='text' placeholder='enter your last name' value={inputdata.lname} onChange={handledata1} name='lname'></input><br></br>
            <label className='fw-bold fs-5'>MobileNo.:</label><br></br>


            <input type='text' placeholder='enter your mobile' value={inputdata.mobile} onChange={handledata1} name='mobile'></input><br></br>
            <label className='fw-bold fs-5'>Message:</label><br></br>

            <input type='text' placeholder='enter message' value={inputdata.message} onChange={handledata1} name='message'></input><br></br>
<button onClick={handledata} className='mt-2 fw-bold fs-4 p-1'>submit</button>


        </form>
        </div>
    </>
  )
}

export default Contact