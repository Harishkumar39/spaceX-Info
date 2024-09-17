import React, { useEffect, useState } from "react";
import { getHistory, Historys } from "../services/ApiService";
import FilterBar from "../components/FilterBar";

const History: React.FC = () => {
    const [history, setHistory] = useState<Historys[]>([]);
    const [filterResults, setFilterResults] = useState<Historys[]>([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const historyResponse = await getHistory();
                console.log(historyResponse);
                setHistory(historyResponse.data);
                setFilterResults(historyResponse.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchdata();
    }, []);

    const handleSearch = (query: string) =>{
        const results = history.filter((history)=> history.title.toLowerCase().includes(query));
        setFilterResults(results);
    }

    return (
        <div className="flex flex-col px-4 py-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/images/spacex_sun.jpg)' }}>
            
            <div className="flex justify-between">
                <h1 className="text-4xl text-white font-extrabold tracking-widest pl-32 mb-8">History of SpaceX</h1>
                <FilterBar filters={handleSearch}/>
            </div>

            <div className="flex flex-col">
            
                {filterResults.map((history) => (
                    <div key={history.title} className="mb-4 mx-32 rounded-lg shadow-md p-4 bg-gray-400 bg-opacity-30">
                        
                        <h2 className="text-3xl font-bold text-yellow-400 mb-2">{history.title}</h2>
                        <h3 className="text-lg text-gray-300 mb-4">
                            {new Date(history.event_date_utc).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">{history.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
