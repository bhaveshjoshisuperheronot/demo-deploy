import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import { login } from '../store/actions/auth';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: '',
                password: ''
            }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onBlur(e) {
        if(e.target.value !== '') {
            
        }
    }

    componentDidMount() {
        
    }

    handleSubmit = (e) => {
        this.props.login({email: this.state.email, password: this.state.password})
    }


    render() {
        if(this.props.redirect) {
            return(<Redirect to={'/dashboard'}/>)
        }

        return(
            <div className="login-box-parent">
                <div className="login-box row">
                    <div className="col s6"></div>
                    <div className="col s6">
                        <h4>Login</h4>
                        <div className="input--field-box">
                            <input 
                            className={`input--field ${(this.state.email)? 'focused' : '' }`}
                            type="email" 
                            name="email" 
                            placeholder="abc@xyz.com" 
                            onChange={this.onChange} 
                            onBlur={this.onBlur}/>
                            <label>Email Address</label>
                        </div>
                        <div className="input--field-box">
                            <input
                            className={`input--field ${(this.state.password)? 'focused' : '' }`}
                            type="password" 
                            name="password" 
                            onChange={this.onChange} 
                            onBlur={this.onBlur}/>
                            <label>Password</label>
                        </div>
                        <input type="submit" value="Login" className="button" onClick={this.handleSubmit}/>
                        <Link to="/signup/" className="secondary-button">Sign Up</Link>
                    </div>                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redirect: state.auth.redirect,
        id: state.auth.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);