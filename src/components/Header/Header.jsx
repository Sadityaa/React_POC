import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav className='d-flex align-items-center py-4 px-5 bg-dark text-white'>
      <a className="navbar-brand" href="#">Logo</a>

      <ul className='d-flex mb-0 gap-5 ps-0'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/toaster">Toaster</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
