import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-auto w-full shadow sticky z-50 top-0 p-5 bg-slate-500 position:sticky t-0 flex justify-center flex-wrap">
      <ul className="flex flex-wrap gap-10 mx-w-[20rem] justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-2xl ${isActive ? "text-orange-500" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="About"
            className={({ isActive }) =>
              `block text-2xl ${isActive ? "text-orange-500" : "text-white"}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-10 mx-w-[5rem] ml-[10rem]">
        <button className="border-none bg-blue-700 hover:bg-blue-500 text-white hover:text-orange-500 text-2xl px-3 font-bold rounded-2xl">
          <Link
            to="Login"
          >
            Login
          </Link>
        </button>
        <button className="border-none bg-blue-700 hover:bg-blue-500 text-white hover:text-orange-500 text-2xl px-3 font-bold rounded-2xl">
          <Link
            to="SignUP"            
          >
            SignUp
          </Link>
        </button>
      </div>
    </div>
  );
}
