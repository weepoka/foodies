import React from 'react';
import TestimonialCard from './TestimonialCard';
import TestimonialData from '../../../../TestimonialData';

const Testimonial = () => {
  return (
    <div id="TestimonialsScroll" className="mx-auto text-center container mb-24 md:px-0 px-5">
      <div className="mb-6 text-3xl font-bold welcome text-green-500">
        Testimonials
      </div>
      <p className="mb-14 mt-10 md:mt-0 pb-2 md:mb-12 md:pb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      {/* Container for the Testimonials */}
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        
        {
          TestimonialData.map((data, index) => {
            return (<TestimonialCard image={data.image} name={data.name} profession={data.profession} messege={data.messege} />)
          })
        }
        
      </div>
    </div>
  );
};

export default Testimonial;
