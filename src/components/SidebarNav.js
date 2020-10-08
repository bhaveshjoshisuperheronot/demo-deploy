import React  from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li><NavLink to="/dashboard/">Dashboard</NavLink></li>
                <li><NavLink to="/account-details/">Account Details</NavLink></li>
                <li><NavLink to="/content-library/">Content Library</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar