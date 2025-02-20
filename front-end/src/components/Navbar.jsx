import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-red-600 p-4">
        <ul className="flex justify-between items-center space-x-4 px-4 text-white ">
          <li>
            <NavLink to="/" className="text-xl font-bold hover:text-gray-300">
              Buffet Lounge
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="font-bold hover:text-gray-300">
              Order
            </NavLink>
          </li>
        </ul>
        <hr className="my-2" />
        <nav className="container mx-auto">
          <ul className="flex justify-center items-center space-x-8 text-white text-lg">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                หมู
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                เนื้อ
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                ไก่
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                ผัก
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                เครื่องดื่ม
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                ของหวาน
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;