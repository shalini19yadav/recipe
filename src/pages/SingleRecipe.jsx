import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'

const SingleRecipe = () => {


    let location=useLocation()
    console.log(location)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)
  return (
    <div>
      
      <div className="row mt-4">
        <div className="col-md-4 d-flex justify-content-center">
        <img className='img-fluid' src={location.state.recipe.image} alt="" />
        </div>
        <div className="col-md-8 d-flex  flex-column ">
            <h2 className='d-flex justify-content-center mt-1' >{location.state.recipe.label}</h2>
            <h5 className='d-flex justify-content-center mt-3' >Meal Type:{location.state.recipe.mealType}</h5>
            <div className='d-flex justify-content-center mt-3'>  <Link  to={location.state.recipe.url} className='btn btn-primary  '> How to make</Link>
            </div>
            <div className="row d-flex align-item-center justify-content-center gap-2 mt-3  ">
                
                <div className="col-md-3 bg-warning d-flex flex-column align-items-center  ">
                  <p>{location.state.recipe.totalNutrients.FAT.label}</p>
                  <p>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)} mg</p>
                </div>
                <div className="col-md-3 bg-warning d-flex flex-column align-items-center  ">
                  <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
                  <p>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)} mg</p>
                </div>
                <div className="col-md-3 bg-warning d-flex flex-column align-items-center  ">
                  <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
                  <p>{Math.ceil(location.state.recipe.totalNutrients.PROCNT.quantity)} mg</p>
                </div>
            </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 d-flex align-items-center flex-column ">
          
          <ul>
          <h2>Health Labels::</h2>
            {location.state.recipe.healthLabels.map((ele)=>{
              return <li>{ele}</li>
            })}
          </ul>
          
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center ">
         
           <ul>
           <h2>Ingredients:</h2>
            {location.state.recipe.ingredients.map((ele)=>{
              return <li>{ele.text}</li>
            })}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SingleRecipe
