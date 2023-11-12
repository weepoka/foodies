import React from 'react'
import FoodCard from './FoodCard'
import OfferFood from '../../../../Data'

export default function Offers() {


    return (
        <>
            <div id="OfferScroll" className='w-full h-auto container mx-auto pt-24 md:pt-0 md:py-10'>
                <div className='welcome text-green-500 text-xl text-center mb-7'>
                    Offers
                </div>
                <div className='text-4xl text-center mb-16'>
                    Best Offers For All
                </div>
                <div className='w-full h-auto flex flex-wrap md:justify-between justify-center md:px-0 px-5'>
                    {
                        OfferFood.map((data, index) => {
                            return (<FoodCard
                                key={index}
                                name={data.name}
                                image={data.image}
                                price={data.price}
                                rating={data.rating}
                                offerPrice={data.offerPrice}
                            />)
                        })
                    }
                </div>
            </div>
        </>
    )
}
