import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const location = useLocation()
  const { state } = location
  const { quantity, menuImage, menuName, menuDescription } = state || {}

  if (!state) {
    return <p>ไม่มีข้อมูลออร์เดอร์</p>
  }

  return (
    <div className="container mx-auto py-12 p-4">
      <div className="border-4 border-red-300 rounded-lg flex flex-col md:flex-row">
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img className="w-full h-full object-cover" src={menuImage} alt={menuName} />
        </div>
        <div className="flex flex-col p-6 justify-center items-center w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{menuName}</h1>
          <p className="text-lg">{menuDescription}</p>
          <p className="text-lg">จำนวน: {quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default Order

