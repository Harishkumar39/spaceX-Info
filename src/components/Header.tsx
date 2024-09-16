import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[open])

  const handleScroll = () =>{
    if(open){
      setOpen(!open)
    }
  }

  return (
    <header className='bg-black text-white shadow-md'>
      <nav className='container mx-auto flex items-center justify-between p-4 relative'>

        <div className='flex items-center'>
          <Link to='/' className='hover:underline transition-transform duration-300 ease-in-out'>
            <img src="/images/spaceX-logo.png" alt="Logo" className='h-8' />
          </Link>
        </div>

        <button className='lg:hidden text-white focus:outline-none z-20' onClick={toggleMenu}>
          {open ? (
            <HiX size={24} />
          ) : (
            <HiMenu size={24} />
          )}
        </button>

        <div 
          className={`fixed top-12 right-0 h-full bg-black lg:bg-transparent lg:static lg:w-auto transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 opacity-60' : 'translate-x-full opacity-0'} lg:translate-x-0 lg:opacity-100`}
          style={{maxWidth: '100%' }}
        >
          <ul className='flex mx-auto flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 p-4 lg:p-0'>
            <li>
              <Link to='/' id="links"  className='relative block py-2 px-4 text-lg text-white overflow-hidden tracking-wider'>
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-100 origin-left w-full"></span>
              </Link>
            </li>
            <li>
              <Link to='/history' id="links"  className='relative block py-2 px-4 text-lg text-white overflow-hidden tracking-wider'>
                History
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-100 origin-left w-full"></span>
              </Link>
            </li>
            <li>
              <Link to='/launches' id="links"  className='relative block py-2 px-4 text-lg text-white overflow-hidden tracking-wider'>
                Launches
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-100 origin-left w-full"></span>
              </Link>
            </li>
            <li>
              <Link to='/rockets' id="links"  className='relative block py-2 px-4 text-lg text-white overflow-hidden tracking-wider'>
                Rockets
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-100 origin-left w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
