import React from 'react'
import './Header.scss';
export default function Header() {
    return (
        <header className='px-2 py-2'>
            <nav className='d_flex'>
                {/* Logo */}
                <a className="navbar-brand" href="#">Logo</a>
                {/* Navigation */}
                <ul className="d_flex">
                    <li className='px-1'>
                        <a href="#">Home </a>
                    </li>
                    <li className='px-1'>
                        <a href="#">About</a>
                    </li>
                    <li className='px-1'>
                        <a href="#">Typography</a>
                    </li>
                </ul>
            </nav>
        </header>


    )
}
