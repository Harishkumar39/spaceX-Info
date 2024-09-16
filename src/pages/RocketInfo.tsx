import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRocketById, SingleRocket } from "../services/ApiService";
import Slider from 'react-slick'


const RocketInfo: React.FC<{}> = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:1500,
        slidesToScroll: 1,
        arrows: false
    };

    const {rocketId} = useParams<{rocketId?: string}>();
    const [rocket, setRocket] = useState<SingleRocket>()
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{

        const fetchData = async() =>{
            if (rocketId) { 
                try {
                    const rocketResponse = await getRocketById(rocketId);
                    setRocket(rocketResponse.data);
                    console.log(rocketResponse.data);
                    
                    
                } catch (err) {
                    console.error('Error fetching rocket data:', err);
                    console.log('Failed to fetch rocket data');
                } finally {
                    setLoading(false);
                }
            } else {
                console.log("Error in getting Info");
                
                setLoading(false);
            }
        }

        fetchData();

    }, [rocketId])

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    return(
        <div className="p-4 bg-black text-white w-full">
            {rocket && (
                <div className="container">
                    <h1 className="text-4xl font-bold text-center mb-6">{rocket.name}</h1>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="flex-shrink-0 w-full md:w-2/3 mb-6 md:mb-0">
                            {rocket.flickr_images.length > 0 && (
                                <Slider {...settings} className="w-full">
                                    {rocket.flickr_images.map((imgUrl, index) => (
                                        <div key={index} className="w-full">
                                            <img src={imgUrl} alt={`Rocket ${rocket.name} ${index}`} className="w-full h-auto object-cover" />
                                        </div>
                                    ))}
                                </Slider>
                            )}
                        </div>
                        <div className="w-full md:w-1/3 overflow-x-auto">
                            <p className="text-justify leading-loose mb-4">{rocket.description}</p>
                            <table className="w-full table-auto border-separate border-spacing-2">
                                <tbody>
                                    <tr>
                                        <td className="p-2 font-bold">Mass</td>
                                        <td className="p-2">{rocket.mass.kg} kgs</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-bold">Height</td>
                                        <td className="p-2">{rocket.height.feet} feet</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-bold">Wikipedia</td>
                                        <td className="p-2">
                                            <a href={rocket.wikipedia} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                                {rocket.wikipedia}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RocketInfo