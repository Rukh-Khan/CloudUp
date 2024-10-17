import React, { useState } from 'react'
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className='nav_ul'>
      {
        navLinks.map((item) => (
          <li key={item.id} className='nav_li'>
            <a href={item.href} className='text-lg text-rose-500 hover tracking-wider'>
              {item.title}
            </a>
          </li>
        ))
      }
    </ul>
  )
}
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className='top-5 lg:top-0 right-0 left-0 z-50 w-full fixed bg-gradient-to-br from-blue-50 to-gray-50 max-lg:border-2 max-lg:rounded-full max-lg:shadow-xl max-md:shadow-blue-200'>
      <div className='max-container'>
        <nav className='flex flex-row justify-between py-4'>
          <div className='inline-flex gap-3'>
            <a href='/'>
              <img
                src='assets/cloudDruIco.png'
                width={28}
                height={28}
                className='lg:ml-10 ml-4'
              />
            </a>

            <a href='/' className='bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent font-bold text-2xl bg-blue-300 font-poppins'>CloudUp</a>
          </div>

          <div className='mr-10 sm:flex hidden'>
            <NavItems />
          </div>

          <button className="sm:hidden flex mr-5" aria-label='toggle-menu' onClick={toggleMenu}>
            <img
              src={isOpen ? 'assets/close.png' : 'assets/hamburger.svg'}
              width={20}
              height={20}
              alt='toggle'
            />
          </button>

          <div className={`navSideBar ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
            <nav className='p-2'>
              <NavItems/>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;