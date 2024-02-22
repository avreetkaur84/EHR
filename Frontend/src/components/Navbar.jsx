import React from "react";
import userProfilePic from "../images/songKang.jpg"
import { NavLink } from "react-router-dom";
import '../components/Home/Home.css'

const Navbar = () => {
  return (
    <nav className="bg-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
              <h1 className="text-white font-bold text-lg">NexusHealth Hub</h1>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <NavLink to="/patientProfile">
              <div className="text-white hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                Patient Profile
              </div>
            </NavLink>
            <NavLink to="/hospitals">
              <div className="text-white hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                Hospitals
              </div>
            </NavLink>
            <NavLink to="/ngoFunding">
              <div className="text-white hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                NGO & Funding
              </div>
            </NavLink>
            <NavLink to="/diseases">
              <div className="text-white hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                Diseases
              </div>
            </NavLink>
            <NavLink to="/aiModel">
              <div className="text-white hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                AI Model
              </div>
            </NavLink>
              
            </div>
          </div>
          <NavLink to="/login" className="bg-white hover:bg-red-700 hover:text-white text-purple-700 font-bold py-2 px-4 rounded">
              Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
