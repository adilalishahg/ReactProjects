import React from 'react'
import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Navigation = () => {
  return (
    <nav>
        <div className='nav-containter'>
            <input
                type="text"
                className='search-input'
                placeholder='Enter your search shoes'
            />
        </div>
        <div className='profile-container'>
            <a href="#">
                <FiHeart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>

    </nav>
  )
}

export default Navigation