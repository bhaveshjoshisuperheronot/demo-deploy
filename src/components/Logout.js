import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import { logout } from '../store/actions/auth';
import { connect } from 'react-redux';

class Logout extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: '',
                password: ''
            }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (e) => {
        this.props.logout({email: this.state.email, password: this.state.password})
    }


    render() {
        if(!this.props.redirect) {
            return(<Redirect to={'/login'}/>)
        }

        return(
            <div className="login-box-parent">
                <div className="login-box row">
                    <div className="col s12">
                        <h4>Do you want to Logout?</h4>
                        <input type="submit" value="Logout" className="button" onClick={this.handleSubmit}/>
                        <Link to="/dashboard/" className="secondary-button">Back to Dashboard</Link>
                    </div>                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redirect: state.auth.redirect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (creds) => dispatch(logout(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);