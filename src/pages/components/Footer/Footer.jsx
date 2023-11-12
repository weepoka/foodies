import React from "react";
import Logo from "../../../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="" class="flex items-center mb-4 sm:mb-0">
            <div className="text-2xl font-bold">
              Weepoka Resturant <span className="text-green-500"> .</span>
            </div>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Menu
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Offers
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className=" flex items-center justify-center text-sm text-gray-500 text-center dark:text-gray-400">
          Copyright © 2023. All Rights Reserved By{" "}
          <Link href="https://www.weepoka.com/">
            <Image src={Logo} className="h-20 w-20 object-contain" alt="Logo" />{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}
