import React  from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Navbar = () => {
    return(
        
        <footer className="grey darken-4">
        <div className="page-footer grey darken-4 container">
            <div className="">© 2020 Copyright:</div>
            <Link to="/contact">Terms of Use</Link>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Cookie Policy</Link>
        </div>
        </footer>
        
    )
}

export default Navbar