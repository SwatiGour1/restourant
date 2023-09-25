import axios from 'axios'
import React, { useState } from 'react'

function Contact1() {
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
    <div>
        <h1>Contact1</h1>
        <form>
            <label>First Name:</label><br></br>
            <input type='text' placeholder='enter your first name' value={inputdata.fname} onChange={handledata1} name='fname'></input><br></br>
            <label>Last Name:</label><br></br>

            <input type='text' placeholder='enter your last name' value={inputdata.lname} onChange={handledata1} name='lname'></input><br></br>
            <label>MobileNo.:</label><br></br>


            <input type='text' placeholder='enter your mobile' value={inputdata.mobile} onChange={handledata1} name='mobile'></input><br></br>
            <label>Message:</label><br></br>

            <input type='text' placeholder='enter message' value={inputdata.message} onChange={handledata1} name='message'></input>
<button onClick={handledata}>submit</button>


        </form>
        </div>
  )
}

export default Contact1