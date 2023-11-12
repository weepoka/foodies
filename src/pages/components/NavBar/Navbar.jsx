import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-full h-[8%] bg-color mx-auto flex justify-between items-center md:px-0 px-4 fixed">
      <div className="w-full h-full flex justify-between items-center container mx-auto ">
        <div className="text-2xl font-bold">
          Foodies<span className="text-green-500"> .</span>
        </div>
        <div>
          <div className="flex">
            <div className="md:ml-8 hover:text-green-500 cursor-pointer duration-200 md:text-base text-sm ml-3">
              <Link to="HomePageScroll" smooth={true} duration={500}>
                Home
              </Link>
            </div>
            <div className="md:ml-8 hover:text-green-500 cursor-pointer duration-200 md:text-base text-sm ml-3">
              <Link to="MenuScroll" smooth={true} duration={800}>
                Menu
              </Link>
            </div>
            <div className="md:ml-8 hover:text-green-500 cursor-pointer duration-200 md:text-base text-sm ml-3">
              <Link to="OfferScroll" smooth={true} duration={800}>
                Offers
              </Link>
            </div>
            <div className="md:ml-8 hover:text-green-500 cursor-pointer duration-200 md:text-base text-sm ml-3">
              <Link to="TestimonialsScroll" smooth={true} duration={800}>
                Testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
