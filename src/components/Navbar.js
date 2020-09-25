import React  from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from '../media/bokoo-logo.png';
import userIcon from '../media/bokoo-user-icon.png';
import '../css/header.css'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-4">
            <div className="container row">
                <Link to="/" className="col s3"><img className="bokoo-main-logo" alt='logo' src={logo}/></Link>
                <ul className="col s5 bokoo-main-menu">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/contact/">Contact</NavLink></li>
                </ul>
                <ul className="col s4 bokoo-right-menu">
                    <li><NavLink className="bokoo-user-acc" to="/"><img alt='logo' src={userIcon}/>My Account</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar