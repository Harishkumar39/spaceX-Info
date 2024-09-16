import React, { useEffect, useState } from "react";
import { getRockets, NumRockets } from "../services/ApiService";
import RocketCard from "../components/RocketCard";
import FilterBar from "../components/FilterBar"

const Rockets: React.FC<{}> = (props) => {

    const [rockets, setRockets] = useState<NumRockets[]>([])
    const [searchRockets, setSearchRockets] = useState<NumRockets[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const rocketResponse = await getRockets();
                // console.log(rocketResponse.data[0]);
                setRockets(rocketResponse.data)
                setSearchRockets(rocketResponse.data)
                setLoading(true);
                
                
            }catch(e){
                console.log(e);  
            }
        }

        fetchData();
    }, [])

    const handleSearch = (query: string) =>{
        const results = rockets.filter((rocket)=> rocket.name.toLowerCase().includes(query.toLowerCase()));
        setSearchRockets(results);
    }


    return(
        <div className="px-8">
            <div className="flex justify-between mb-6">
                <h1 className="text-4xl text-white font-bold">SpaceX Rockets</h1>
                <FilterBar filters = {handleSearch}/>
            </div>
            {searchRockets.map((rocket)=>(
                <RocketCard 
                    key={rocket.id} 
                    id={rocket.id} 
                    name={rocket.name} 
                    description={rocket.description} 
                    flickr_images={rocket.flickr_images} 
                />
            ))}
            
        </div>
    )
}

export default Rockets