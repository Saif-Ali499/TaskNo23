import React from "react";

function Home() {
  return (
    <div className="h-screen w-full my-2 p-10 box-border bg-slate-200 flex flex-wrap justify-between">
      <div className="border-2 bg-yellow-300 w-[45rem] h-full bg-[url('https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover">
        <div className="my-20 ml-90 text-3xl font-bold text-blue-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          voluptate animi nulla officiis quae sapiente! Est doloribus incidunt
          unde rem eaque, nesciunt iusto molestiae voluptates sapiente totam
          nihil, magnam itaque.
          <div />
        </div>
      </div>
      <div className="border-2 bg-yellow-300 w-[40rem] h-full bg-[url('https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover">
        <ul className="my-20 ml-90 text-4xl font-bold text-blue-700 grid gap-5">
          <li>* Apple</li>
          <li>* Banana</li>
          <li>* Mango</li>
          <li>* Grapes</li>
          <li>* PineApple</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
