import React from 'react'

export default function Card({coffee}) {

    const {
        id,
        name,
        image,
        category,
        ingredients,
        nutrition_info,
        origin,
        type,
        description,
        making_process,
        rating,
        popularity
      } = coffee;
      
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all transform hover:scale-105 duration-300">
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
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mt-6">
          Learn More
        </button>
      </div>
    </div>
  </div>
  
  )
}
