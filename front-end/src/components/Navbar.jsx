import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-800 p-4">
        <ul className="flex justify-between items-center space-x-4 px-4">
          <li>
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Logo
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="text-gray-300 hover:text-white">
              Order
            </NavLink>
          </li>
        </ul>
        <hr className="my-2" />
        <nav className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="text-white border-b-2 border-white"
                className="text-gray-300 hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="text-white border-b-2 border-white"
                className="text-gray-300 hover:text-white"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-white border-b-2 border-white"
                className="text-gray-300 hover:text-white"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                activeClassName="text-white border-b-2 border-white"
                className="text-gray-300 hover:text-white"
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;