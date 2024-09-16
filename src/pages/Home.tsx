import React from 'react';

const Home: React.FC<{}> = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/origin-6.webp)' }}>
      
      <div className="absolute inset-0 bg-black justify-center bg-opacity-50 flex items-center">
        <div className="text-center text-white px-4 md:px-8">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to SpaceX
          </h1>
          <p className="text-lg md:text-xl mb-6 ">
            Explore the unexplored side space and technology with us.
          </p>
          <a href="/rockets" className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400">
            Discover Our Rockets
          </a>
          <h3 className='text-3xl pt-8 text-gray-400 font-bold'>Elon Musk</h3>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
