import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

export default function FoodCard({ name, image, price, rating, offerPrice }) {
    return (
        <>
            <div className='w-[350px] h-[400px] bg-white shadow-2xl rounded-xl mb-10'>
                <div className='w-full h-[50%] flex justify-center pt-7'>
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                        <img src={`/images/${image}`} className='h-full' alt="" />
                    </div>
                </div>
                <div className='w-full h-auto p-7 mt-7'>
                    <div className="w-full h-full">
                        <div className='text-lg font-semibold'>
                            {name}
                        </div>
                        <div className='my-4 text-xl flex text-green-500'>
                            {rating > 1 ? <BsStarFill  className='mr-2' /> : rating > 0.5 ? <BsStarHalf  className='mr-2' /> : <BsStar className='mr-2' />}
                            {rating > 2 ? <BsStarFill  className='mr-2' /> : rating > 1.5 ? <BsStarHalf  className='mr-2' /> : <BsStar className='mr-2' />}
                            {rating > 3 ? <BsStarFill  className='mr-2' /> : rating > 2.5 ? <BsStarHalf  className='mr-2' /> : <BsStar className='mr-2' />}
                            {rating > 4 ? <BsStarFill  className='mr-2' /> : rating > 3.5 ? <BsStarHalf  className='mr-2' /> : <BsStar className='mr-2' />}
                            {rating == 5 ? <BsStarFill className='mr-2'  /> : rating > 4.5 ? <BsStarHalf className='mr-2'  /> :<BsStar className='mr-2' />}
                        </div>
                        <div className='w-full flex text-xl'>
                            <div className={`w-1/2 ${offerPrice > 0 ? "line-through" : null}`}>
                                {price} $
                            </div>
                            <div className='w-1/2 flex justify-end text-2xl font-semibold'>
                                {offerPrice == 0 ? null : `${offerPrice} $`} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
