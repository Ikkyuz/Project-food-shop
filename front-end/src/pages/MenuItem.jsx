import React from 'react'
import { useParams } from 'react-router-dom'
import { menus } from './../data'

const MenuItem = () => {
  const { id } = useParams()

  return (
    <div className="flex justify-center items-center py-12 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-7xl">
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img src={menus[id-1].image} alt={menus[id-1].name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold">{menus[id-1].name}</h2>
          <p className="text-lg mt-4">{menus[id-1].description}</p>
          <div className="flex items-center mt-6">
            <span className="text-lg font-bold">{menus[id-1].price} Baht</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Add to Order</button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem

