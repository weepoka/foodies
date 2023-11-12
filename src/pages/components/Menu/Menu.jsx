import React from 'react'
import MenuFood from '../../../../MenuFood'
import FoodCard from '../Offers/FoodCard'

export default function Menu() {
    return (
        <>
            <div id="MenuScroll" className='w-full h-auto container mx-auto py-28'>
                <div className='welcome text-green-500 text-xl text-center mb-7'>
                    Menu
                </div>
                <div className='text-4xl text-center mb-16'>
                    Explore Our Menu
                </div>
                <div className='w-full h-auto flex flex-wrap md:justify-between justify-center md:px-0 px-5'>
                    {
                        MenuFood.map((data, index) => {
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
