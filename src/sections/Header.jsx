import React from 'react'

const Header = () => {
  return (
    <header className='border-2 border-black max-container'>
      <nav className='flex flex-row justify-between bg-gradient-to-l from-blue-100 to-gray-100 p-10 border-2 border-blue'>
        <a href='/'>
          ClouDru
        </a>

        <div>
          <ul className='flex flex-row gap-3'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;