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
              <NavLink to="/หมู" className="hover:text-gray-300 rounded-lg px-4 py-2">
                หมู
              </NavLink>
            </li>
            <li>
              <NavLink to="/เนื้อ" className="hover:text-gray-300 rounded-lg px-4 py-2">
                เนื้อ
              </NavLink>
            </li>
            <li>
              <NavLink to="/ไก่" className="hover:text-gray-300rounded-lg px-4 py-2">
                ไก่
              </NavLink>
            </li>
            <li>
              <NavLink to="/ผัก" className="hover:text-gray-300 rounded-lg px-4 py-2">
                ผัก
              </NavLink>
            </li>
            <li>
              <NavLink to="/เครื่องดื่ม" className="hover:text-gray-300 rounded-lg px-4 py-2">
                เครื่องดื่ม
              </NavLink>
            </li>
            <li>
              <NavLink to="/ของหวาน" className="hover:text-gray-300 rounded-lg px-4 py-2">
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