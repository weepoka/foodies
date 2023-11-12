import React from "react";

export default function HeroSection() {
  return (
    <>
      <div
        id="HomePageScroll"
        className={`w-full h-[100%] pt-10 md:pt-0 md:h-[92%] px-5 flex items-center container mx-auto bg-white-hello`}
      >
        <div className="w-full md:w-[60%]">
          <div className="w-full md:w-[90%] h-full">
            <div className="md:text-6xl text-5xl md:text-left text-center font-semibold md:leading-[80px]">
              Savoring Success with{" "}
              <span className="text-green-500"> Foodie's </span> Culinary Quest!
            </div>
            <div className="md:max-w-[70%] w-full md:my-20 md:text-left text-center my-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              illum alias, voluptatem beatae doloremque expedita eveniet
              veritatis qui tempora.
            </div>
            <div className="w-auto h-[130px] md:h-[50px] flex md:flex-row flex-col">
              <input
                type="text"
                className="md:w-[300px] w-full h-full rounded-full mr-6 px-5 outline-green-500"
                placeholder="Enter Your Email"
              />
              <button className="h-full mt-[30px] md:mt-0 w-full md:w-[100px] rounded-full bg-green-500 text-white font-semibold">
                Sent
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%] hidden items-center justify-end h-full md:flex">
          <div className="w-[80%] h-auto p-10 border-green-500 border-8 rounded-full">
            <img src="/images/HeroSection.png" className="w-[100%]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
