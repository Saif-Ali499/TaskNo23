import React from "react";

export default function SignUp() {
  return (
    <div className="h-screen w-full bg-black flex justify-center text-orange-500">
      <div className="w-[20rem] h-[32rem] border-2 self-center p-6 grid gap-1 justify-center text-red-900">
        <div className="self-center h-30 w-30 my-7">
          <img
            className="h-25 w-30 ml-21 self-center"
            src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="logo"
          />
        </div>
        <input
          className="text-2xl h-11 text-white border-red-500 border-2 p-2"
          type="Text"
          placeholder="Enter UserName"
        />
        <input
          className="text-2xl h-11 text-white border-red-500 border-2 p-2"
          type="email"
          placeholder="Enter Email"
        />
        <input
          className="text-2xl h-11 text-white border-red-500 border-2 p-2"
          type="Password"
          placeholder="Enter Password"
        />
        <input
          className="text-2xl h-11 text-white border-red-500 border-2 p-2"
          type="Password"
          placeholder="Confirm Password"
        />
        <button className="cursor-pointer text-xl p-2 box-border ml-25 rounded-xl hover:border-2 w-[6rem] h-10">Register</button>
      </div>
    </div>
  );
}
