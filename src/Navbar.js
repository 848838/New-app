import React from 'react'
import {
 NavLink
} from "react-router-dom";
import Api from './Api';
function Navbar() {
    return (
        <div className='container-fluid my-5 '>
            <ul style={{ color: 'white' }}>
                <a href='#'>sports</a>
                {/* <li className='nav-item'><NavLink to='/'>business</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navbar;
