import React from "react";

interface filterBarQuery{
    filters: (query: string) => void 
}

const FilterBar: React.FC<filterBarQuery> = ({filters}) =>{

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        filters(e.target.value)
    }

    return(
        <div className="lg:mx-32 md:mx-16 sm:mx-8 w-1/3">
            <input type="text" placeholder="Search by name ..." onChange={handleSearch} className="border border-gray-300 rounded p-2 w-full my-2" />
        </div>
    )

}

export default FilterBar