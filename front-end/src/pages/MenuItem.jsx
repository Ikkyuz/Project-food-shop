import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { menus } from './../data';

const MenuItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const menu = menus.flatMap(menuCategory => menuCategory.items).find(menu => menu.id === parseInt(id));
  if (!menu) 
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl mb-4">This menu is not enough.</h1>
        <Link to="/" className="text-blue-500 hover:underline mt-4">
          Go back to Home
        </Link>
      </div>
    );;

  const [quantity, setQuantity] = useState(1);

  // Function to increase quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/order", { 
      state: { 
        quantity, 
        menuImage: menu.image, 
        menuName: menu.name, 
        menuDescription: menu.description 
      } 
    });
  };
  const cancelOrder = () => navigate('/');

  return (
    <div className="container mx-auto py-12 p-4">
      <form onSubmit={submitForm} className="border-4 border-red-300 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
            <img id='menuImage' className="w-full h-full object-cover" src={menu.image} alt={menu.name} />
          </div>
          <div className="flex flex-col p-6 w-full md:w-1/2">
            <div className="flex items-center justify-between mb-2">
              <h2 id='menuName' className="text-3xl font-bold">{menu.name}</h2>
            </div>
            <p className="text-lg">ราคา: {menu.price} บาท</p>
            <p id='menuDescription' className="text-md mt-4">{menu.description}</p>
            <div className="flex items-center mt-4">
              <button type="button" onClick={decrementQuantity} className="px-4 py-2 bg-red-500 text-white rounded transition duration-200 hover:bg-red-600">-</button>
              <span className="mx-4 text-xl">{quantity}</span>
              <button type="button" onClick={incrementQuantity} className="px-4 py-2 bg-green-500 text-white rounded transition duration-200 hover:bg-green-600">+</button>
            </div>
            <button type="submit" className="my-4 px-4 py-2 bg-blue-500 text-white rounded transition duration-200 hover:bg-blue-600">ยืนยันออร์เดอร์</button>
            <button type="button" onClick={cancelOrder} className="px-4 py-2 bg-gray-500 text-white rounded transition duration-200 hover:bg-gray-600">ยกเลิก</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MenuItem;
