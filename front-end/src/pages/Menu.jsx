import React from 'react';
import Layout from './../components/Layout';
import { NavLink } from 'react-router-dom';
import { menus } from './../data';

const Menu = () => {
  const MenuItemCard = ({ item }) => {
    return (
      <NavLink to={`/menu/${item.id}`} className="block">
        <div className='border-4 border-gray-200 rounded-lg p-5 shadow-lg transform hover:scale-105 transition-transform duration-200'>
          <img className='w-full h-48 object-cover mt-4' src={item.image} alt={item.name} />
          <h2 className='text-xl font-bold'>{item.name}</h2>
          <p className='text-md mt-4'>{item.description}</p>
          <p className='text-lg'>Price: {item.price} Baht</p>
        </div>
      </NavLink>
    );
  };

  return (
    <Layout>
      <section className='items-center justify-center mx-auto py-8'>
        <div className='grid grid-cols-1 gap-5'>
          {menus.map((menuCategory) => (
            <div key={menuCategory.category} className='border-4 border-red-300 bg-white rounded-lg p-5 shadow-md'>
              <h1 className='text-2xl font-bold mb-4'>{menuCategory.category}</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {menuCategory.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;

