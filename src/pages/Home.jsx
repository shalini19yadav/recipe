import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar'

const Home = () => {

  let inpRef =useRef()

  const [searchValue, setsearchValue] = useState("biryani");

  const [food, setfood] = useState([]);
  console.log(food)

  let getData= async()=>{
    let res= await fetch(`https://api.edamam.com/search?q="${searchValue}"&app_id=59a44a79&app_key=7775a2faff76377111fc1e72abca567d`)    
    let data= await res.json();
    // console.log(data)
    // console.log(data.hits)
    setfood(data.hits)
  }
 useEffect(()=>{
  getData()
 },[searchValue])

//  const handleClick=(ans)=>{
//   console.log(ans)
//  }

  

const handleSearch=(e)=>{
  e.preventDefault()
  let value= inpRef.current.value
  // console.log(value)
  setsearchValue(value)
}

  return (
    <div className='row d-flex justify-content-center  gap-3'>
      

      <div className='d-flex gap-2 justify-content-center mt-3'>
        <input ref={inpRef} className='rounded borrder-none' type="text" name="" id="" placeholder='Search' />
        <button onClick={handleSearch} className='btn btn-success' style={{background:"crimson"}}>Search</button>
      </div>

      {food.map((obj)=>{
          return <div key={obj.recipe.url} className="card" style={{width: '18rem'}}>
  <img src={obj.recipe.image}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{obj.recipe.label}</h5>
    <Link state={obj} to="/single" className="btn btn-success " style={{background:"crimson"}}>View Recipe</Link>
    {/* <button onClick={()=>handleClick(obj)}> click me</button> */}
  </div>
</div>
  })}

  
    </div>
  )
}

export default Home
