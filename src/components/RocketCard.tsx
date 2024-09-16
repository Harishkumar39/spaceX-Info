import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

interface RocketCardProps {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
}

const RocketCard: React.FC<RocketCardProps> = ({ id, name, description, flickr_images }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="rocket-container bg-black text-white shadow-lg overflow-hidden py-2">
      <div className="flex w-full">
        <div className="flex-shrink-0 w-2/3">
          {flickr_images.length > 0 && (
            <Slider {...settings} className="carousel h-full">
              {flickr_images.map((imgUrl, index) => (
                <div key={index} className='flex w-full justify-center'>
                  <img src={imgUrl} alt={`Rocket ${name} ${index}`} className='w-full h-custom-height object-cover' />
                </div>
              ))}
            </Slider>
          )}
        </div>
        
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-2 tracking-widest">{description}</p>
          <div className="links mt-auto ml-auto">
            <Link to={`/rockets/${id}`} className='border-2 p-2 hover:bg-white hover:text-black rounded transition-colors duration-300'>See More</Link>  
          </div>        
        </div>
      </div>
    </div>
  );
};

export default RocketCard;
