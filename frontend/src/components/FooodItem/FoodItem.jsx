<<<<<<< HEAD
import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  
   const {cartItems, addToCart,removeFromCart,url} = useContext(StoreContext) 
    
  return (
    <div className='food-item'>
        <div className="foot-item-img-container">
             <img className='food-item-img' src={url+"/images/"+image} alt="" />
             {cartItems[id] >0
               ?<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
               : <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
             }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
=======
import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  
   const {cartItems, addToCart,removeFromCart} = useContext(StoreContext) 

  return (
    <div className='food-item'>
        <div className="foot-item-img-container">
             <img className='food-item-img' src={image} alt="" />
             {cartItems[id]
               ?<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
               : <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
             }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
