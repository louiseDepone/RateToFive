import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Header() {
  return (
  
<nav className="fixed top-0 z-90 border-b h-20 flex items-center justify-center w-full   border-gray-200  bg-white dark:bg-gray-900">
  <div className=" flex flex-wrap items-center justify-between w-full  p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RateToFive</span>
  </a>
 
    <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
 
      <ul className="md:flex flex-col hidden p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <Link to='/authenticated/RateAtTeacher' className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Rate</Link>
        </li>
        <li>
          <Link to='/authenticated/feed' className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Feed</Link>
        </li>
        <li>
          <Link to="/authenticated/school" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">School</Link>
        </li>
        <li>
          <Link to="/authenticated/teacher" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Teachers</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
  )
}
