import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { menus } from './../data';

const MenuItem = () => {
  const { id } = useParams();
  const item = menus.flatMap(menuCategory => menuCategory.items).find(item => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!item) return <h2>Menu Item not found!</h2>;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex justify-center items-center py-12 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
        </div>
        <div className="flex flex-col p-6 w-full md:w-1/2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">{item.name}</h2>
          </div>
          <p className="text-lg">Price: {item.price} Baht</p>
          <p className="text-md mt-4">{item.description}</p>
          <div className="flex items-center mt-4">
            <button onClick={decrementQuantity} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
            <span className="mx-4 text-xl">{quantity}</span>
            <button onClick={incrementQuantity} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to order</button>
      </div>
    </div>
  );
};

export default MenuItem;