import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard, MdOutlineRoundaboutLeft, MdContactPage } from "react-icons/md";
import { FaMicroblog   } from "react-icons/fa6";

function Navbar(props) {
  return (
    <div className={``}>
      <nav>
        <ul className={`md:mt-10 mt-10 flex flex-col absolute left-3 md:gap-12 gap-10  md:text-lg text-sm cursor-pointer justify-center`}>
        <li><Link to={'/'} className={`link flex items-center gap-1 no-underline hover:bg-${props.theme === "dark" ? "gradient-to-r from-sky-700 to-indigo-700" : "light"} rounded : "light"}`}><MdDashboard/>Dashboard</Link></li>
            <li><Link to={'/about'} className={`link flex items-center gap-1 no-underline hover:bg-${props.theme === "dark" ? "gradient-to-r from-sky-700 to-indigo-700" : "light"} rounded : "light"}`}><MdOutlineRoundaboutLeft/>About</Link></li>
            <li><Link to={'/blog'} className={`link flex items-center gap-1 no-underline hover:bg-${props.theme === "dark" ? "gradient-to-r from-sky-700 to-indigo-700" : "light"} rounded : "light"}`}><FaMicroblog/>Blog</Link></li>
            <li><Link to={'/contact'} className={`link flex items-center gap-1 no-underline hover:bg-${props.theme === "dark" ? "gradient-to-r from-sky-700 to-indigo-700" : "light"} rounded : "light"}`}><MdContactPage/>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
