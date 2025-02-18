import React from 'react';
import Layout from './../components/Layout';

const Menu = () => {
  const menus = [
    {
      category: "อาหารหลัก",
      items: [
        { name: "หมู", price: 100 },
        { name: "เนื้อ", price: 150 },
        { name: "ทะเล", price: 200 }
      ]
    },
    {
      category: "ผัก",
      items: [
        { name: "ผัก", price: 50 }
      ]
    },
    {
      category: "เครื่องดื่ม",
      items: [
        { name: "เครื่องดื่ม", price: 30 }
      ]
    },
    {
      category: "ของหวาน",
      items: [
        { name: "ของหวาน", price: 80 }
      ]
    }
  ];

  return (
    <Layout>
      <section className='items-center justify-center mx-auto py-8'>
        <div className='grid grid-cols-1 gap-6'>
          {menus.map((menuCategory) => (
            <div key={menuCategory.category} className='border-4 border-gray-300 rounded-lg p-4 shadow-md'>
              <h1 className='text-2xl font-bold mb-4'>{menuCategory.category}</h1>
              <div className='grid grid-cols-1 gap-4'>
                {menuCategory.items.map((item) => (
                  <div key={item.name} className='bg-gray-200 p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold'>{item.name}</h2>
                    <p className='text-lg'>Price: {item.price} Baht</p>
                  </div>
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
