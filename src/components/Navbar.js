import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from '../media/bokoo-logo.png';
import userIcon from '../media/bokoo-user-icon.png';
import '../css/header.css'
import { connect } from 'react-redux';
import Login from '../components/Login'
import Signup from '../components/Signup'


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLogin : false,
            showSignUp: false
        }
        this.callLogin = this.callLogin.bind(this);
        this.callSignUp = this.callSignUp.bind(this);
        this.closePopUp = this.closePopUp.bind(this);

    }

    callLogin() {
        document.body.style.overflow = 'hidden';
        this.setState({
            showLogin: true,
            showSignUp: false
        })
    }
    callSignUp() {
        document.body.style.overflow = 'hidden';
        this.setState({
            showLogin: false,
            showSignUp: true
        })
    }
    closePopUp() {
        document.body.style.overflow = 'visible';
        this.setState({
            showLogin: false,
            showSignUp: false
        })
    }

    render(){
        let dashboard, showLoginPopUp, showSignUpPopup;
        if(this.props.isAuth){
            dashboard = <NavLink className="bokoo-user-acc" to="/dashboard/"><img alt='logo' src={userIcon}/>My Account</NavLink>;
        }
        else{
            dashboard = <div className="bokoo-user-acc" onClick={this.callLogin}><img alt='logo' src={userIcon}/>My Account</div>;
        }
        if(this.state.showLogin){
            showLoginPopUp = <Login triggerCallSignUp={this.callSignUp} triggerCallClosePopUp={this.closePopUp}/>;
        }else {
            showLoginPopUp = '';
        }
        if(this.state.showSignUp){
            showSignUpPopup = <Signup triggerCallLoginUp={this.callLogin} triggerCallClosePopUp={this.closePopUp}/>;
        }else {
            showSignUpPopup = '';
        }
        return(
            <div>
            <nav className="nav-wrapper grey darken-4">
                <div className="container row">
                    <Link to="/" className="col s3"><img className="bokoo-main-logo" alt='logo' src={logo}/></Link>
                    <ul className="col s5 bokoo-main-menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about/">About</NavLink></li>
                        <li><NavLink to="/contact/">Contact</NavLink></li>
                    </ul>
                    <ul className="col s4 bokoo-right-menu">
                        <li>
                            {dashboard}
                        </li>
                    </ul>
                </div>
                
            </nav>
            {showLoginPopUp}
            {showSignUpPopup}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Navbar);