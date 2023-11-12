import React from "react";

export default function WelcomeSection() {
  return (
    <>
      <div className="w-full h-auto md:h-screen md:flex container mx-auto pt-24 md:pt-0 text-center md:text-left px-5 md:px-0">
        <div className="md:w-1/2 w-full h-full flex justify-center md:justify-start items-center">
          <div className="w-[70%] rounded-full overflow-hidden p-10 border-8 border-green-500 ">
            <img src="/images/Welcome.png" className="" alt="" />
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center mt-10 md:mt-0">
          <div className="welcome text-3xl text-green-500">Welcome</div>
          <div className="text-4xl font-semibold my-10">
            Welcome to Foodies <br /> Resturant
          </div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a
            officia pariatur tempora, iste quia debitis. Pariatur unde
            voluptatum ex suscipit sunt illum consequatur incidunt labore atque
            error, corrupti debitis, cumque natus necessitatibus? Voluptatem
            quibusdam a voluptatum. Ut commodi esse quae deserunt dignissimos,
            est voluptas illum libero soluta quibusdam! Obcaecati maxime ab
            accusamus ad non ipsum placeat natus ut dolor?
          </div>
        </div>
      </div>
    </>
  );
}
