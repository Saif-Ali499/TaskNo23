import React from "react";

function About() {
  return (
    <div className="py-16 bg-slate-700">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src="https://images.pexels.com/photos/30415600/pexels-photo-30415600/free-photo-of-bold-fashion-portrait-with-blue-and-orange-contrast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="image"
                    />
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-yellow-900 font-bold md:text-4xl">
                        Web Developer
                    </h2>
                    <p className="mt-6 text-orange-700">
                      A web developer is one who can build the websites to became a good web developer a person should do focus on HTML, CSS, and Java-Script first. After making good command in these then he can shift to next step by exploring the libraries (like React) and frameworks(like next.js).
                    </p>
                    <p className="mt-4 text-orange-700">
                        I am a developer and I will be happy to make some service for you I hope you will like it
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}

export default About;
