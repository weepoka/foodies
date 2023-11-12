import React from 'react'

export default function TestimonialCard({image,name,profession,messege}) {
    return (
        <div className="mb-12 md:mb-0 bg-white p-5 rounded-xl shadow-2xl">
            <div className="mb-6 flex justify-center">
                <img
                    src={image}
                    className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                    alt="User Avatar"
                />
            </div>
            <h5 className="mb-4 text-xl font-semibold">{name}</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                {profession}
            </h6>
            <p className="mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                    />
                </svg>
                {messege}
            </p>
        </div>
    )
}
