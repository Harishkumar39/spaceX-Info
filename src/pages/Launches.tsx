import React, { useEffect, useState } from "react";
import { getLaunches, Launch } from "../services/ApiService";
import FilterBar from "../components/FilterBar";

const Items_per_page = 10;

const Launches: React.FC<{}> = (props) => {

    const [launch, setLaunches] = useState<Launch[]>([]);
    const [filterLaunches, setFilterLaunches] = useState<Launch[]>([]);
    const [currPage, setCurrPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{

        const fetchData = async() =>{
            try {
                const launchResponse = await getLaunches();
                setLaunches(launchResponse.data)
                // console.log(launchResponse.data);
                setFilterLaunches(launchResponse.data);
                setLoading(false)
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    },[])

    const handleSearch = (query: string) =>{
        const result = launch.filter((laun)=> laun.name.toLowerCase().includes(query.toLowerCase()))
        setFilterLaunches(result);
    }

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    const totalPages = Math.ceil(filterLaunches.length/Items_per_page);

    const handlePage = (page: number) =>{
        setCurrPage(page);
    }

    const start = (currPage-1) * Items_per_page;
    const currentLaunches = filterLaunches.slice(start, start + Items_per_page);

    return(
        <div className="flex flex-col w-full py-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/spacex_mars.jpg)'}}>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold mb-6 pl-32 text-white">SpaceX Launches</h1>
                <FilterBar filters = {handleSearch} />
            </div>
            {currentLaunches.map((launch) => (
            <div key={launch.id} className="mb-4 mx-32 rounded-lg shadow-md p-4 bg-gray-400 bg-opacity-30">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-yellow-400">{launch.name}</h3>
                    <p className="items-center"><b className="text-yellow-400 font-bold">Launch Date </b> : {new Date(launch.date_utc).toLocaleDateString()}</p>
                </div>
                <br />
                <div>
                    <h2 className="font-bold text-gray-200">Launch details:</h2>
                    <p className="pt-4">{launch.details == null? "Oops!!! Launch details was not shared" : launch.details}</p>
                </div>
            </div>
            ))}
            <div className="flex my-4 overflow-x-auto">
                <div className="flex mx-auto">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => handlePage(index + 1)}
                        className={`mx-1 px-4 py-2 border-2 rounded ${
                            currPage === index + 1 ? "bg-white bg-opacity-40 text-black font-bold" : "bg-transparent text-white"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                </div> 
            </div>
      </div>
       
    )
}

export default Launches