import React from 'react';
import Layout from './../components/Layout';
import { NavLink } from 'react-router-dom';
import { menus } from './../data'

const Menu = () => {
  return (
    <Layout>
      <section className='items-center justify-center mx-auto py-8'>
        <div className='grid grid-cols-1 gap-5'>
          {menus.map((menuCategory) => (
            <div key={menuCategory.category} className='border-4 border-red-300 bg-white rounded-lg p-5 shadow-md'>
              <h1 className='text-2xl font-bold mb-4'>{menuCategory.category}</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {/* menu card */}
                {menuCategory.items.map((item) => (
                  <NavLink key={item.id} to={`/menu/${item.id}`} className="block">
                    <div className='border-4 border-gray-100 rounded-lg p-5 shadow-lg transform hover:scale-105 transition-transform duration-200'>
                      <h2 className='text-xl font-bold'>{item.name}</h2>
                      <p className='text-lg'>Price: {item.price} Baht</p>
                    </div>
                  </NavLink>
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
