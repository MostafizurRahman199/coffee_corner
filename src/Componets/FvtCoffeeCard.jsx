// import React from 'react'

// export default function FvtCoffeeCard() {
//   return (
//     <div>FvtCoffeeCard</div>
//   )
// }


import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { removeFromLocalStorage } from '../utils/storeCardToLocal';

export default function FvtCoffeeCard({coffee}) {

    const {
        id,
        name,
        image,
        category,
       
        description,
       
        rating,
        popularity
      } = coffee;


      const navigate = useNavigate();
      
  return (

    <div className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg  flex flex-col transition-all transform hover:scale-105 duration-300">
        <div className='absolute -top-5 -right-5 rounded-full w-fit'>
            <button onClick={()=>removeFromLocalStorage(id)} className='btn rounded-full w-fit'>❌</button>
        </div>
    <img
      className="w-full h-48 object-cover"
      src={image}
      alt={`${name} image`}
    />
  
    <div className="p-6 flex-grow flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mt-1">{category}</p>
  
      <p className="text-gray-700 mt-3">{description}</p>
  
      <div className="mt-4 flex items-center justify-between">
        <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
        <span className="text-gray-600">Popularity: {popularity}%</span>
      </div>
  
      <div className="mt-auto"> {/* This container pushes the button to the bottom */}
        <button  onClick={()=>navigate(`/coffees/${id}`)} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mt-6">
          See in Details
        </button>
      </div>
    </div>
  </div>

  
  )
}
