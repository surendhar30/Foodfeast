import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {

  return (
    <div className='flex items-center justify-between m-2.5 p-2 bg-[#896421] rounded-[5px] shadow-[-1px_4px_20px_14px_rgba(0,0,0,0.2)] text-black font-bold'>
      <img className='h-16 w-auto' src="https://img.freepik.com/premium-vector/vibrant-logo-food-festall-restaurant_1114494-8012.jpg" alt="" />
    <div className=' px-4 w-auto'>
        <ul className='flex items-center gap-8 text-lg mr-4'>
          <li className='pt-10 pr-2.5 text-lg cursor-pointer'>Home</li>
          <li className='pt-10 pr-2.5 text-lg cursor-pointer'>About</li>
          <li className='pt-10 pr-2.5 text-lg cursor-pointer' >Contact</li>
          <li className="cursor-pointer hover:text-white">
            <FaShoppingCart size={24} /></li>
        </ul>
      </div>
      </div>
  )

}
export default Header