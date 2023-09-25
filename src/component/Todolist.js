import React, { useState } from 'react'

function Todolist() {
    
const head={
    color:"white",
    marginTop:"50px",
    textAlign:"center"
}
const insty={
width:"300px",
marginLeft:"50px"
}
const btn={
    width:"100px",
    height:"30px",
    backgroundColor:"yellow"
}
const ilist={
    color:"darkblue",
    backgroundColor:"white",
    border:"2px solid black",
    width:"200px",
    marginLeft:"100px"
}
const[activity,setactivity]=useState("");
const[listdata,setlistdata]=useState([]);
function addactivity(){
// setlistdata([...listdata,activity])
setlistdata((listdata)=>{
    const updatelist=[...listdata,activity]
    setactivity("")
    console.log(activity)
    return updatelist
})

}
function removeactivity(i){
const updatedlistdata=listdata.filter((elem,id)=>{
    return i!=id;
})
setlistdata(updatedlistdata)
}
  return (
    <>
    <div style={{backgroundColor:"darkblue",width:"500px",height:"500px"}} className='container'>
        <h1 style={head}>Todo-List</h1>
        <input type='text' placeholder='enter item' style={insty} value={activity} onChange={(e)=>setactivity(e.target.value)}></input>
        <button style={btn} onClick={addactivity}>Add</button>
        <p style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Here is your list :{")"}</p>
        {listdata!=[]&&listdata.map((data,i)=>{
return(
    <>
    <p key={i}>
        <div style={ilist}>{data}</div>
        <div><button onClick={()=>removeactivity(i)}>Remove</button></div>
         </p>
    </>
)
        })}
</div>
        </> 
  )
}

export default Todolist