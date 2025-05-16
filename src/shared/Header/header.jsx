import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.scss';
import { FaGlobe, FaMoon, FaShoppingCart, FaRegBell, FaThLarge, FaSlidersH, FaExpand, FaCog } from "react-icons/fa";
import Switcher from '../Switcher/switcher';

const Header = () => {
const [open, setOpen] = useState(false); 

const toggleDrawer = () => {
    setOpen(prev=>!prev);
}

  return (
<>
<header>
      <nav className='display_flex align-items_center justify-content_space-between py_1 px_5 text-white'>
        <a className="navbar-brand" href="#">Logo</a>

        <ul className='display_flex mb-0 gap-2 ps-0'>
          <li>
            <Link to="/"><FaGlobe /></Link>
          </li>
          <li>
            <Link to="/toaster"><FaMoon />
            </Link>
          </li>
          <li>
            <Link to="/"><FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/"><FaRegBell />
            </Link>
          </li>
          {/* <li>
          <Link to="/"><FaWindows  />
          </Link>
          </li> */}
          <li>
            <Link to="/"><FaThLarge />
            </Link>
          </li>
          <li>
            <Link to="/"><FaExpand />
            </Link>
          </li>
          <li>
            <Link to="/"><FaSlidersH />
            </Link>
          </li>
          <li>
            <Link onClick={toggleDrawer} ><FaCog /></Link>
          </li>
        </ul>
      </nav>
</header>
<Switcher switch ={open} toggleDrawer={toggleDrawer}/>
</>
)};

export default Header;
