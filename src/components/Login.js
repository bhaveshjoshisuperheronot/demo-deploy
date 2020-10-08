import React, { Component } from 'react'
import {PostData} from '../services/PostData'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'

class Login extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: '',
                password: '',
                redirect: false
            }
        
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    login() {

        if(this.state.email && this.state.password){
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData', responseJson);
                    this.setState({
                        redirect: true
                    })
                }else{
                    console.log('Login Error');
                }
            })
        }
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


    render() {
        if(this.state.redirect) {
            return(<Redirect to={'/dashboard'}/>)
        }
        if(sessionStorage.getItem('userData')) {
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
                        <input type="submit" value="Login" className="button" onClick={this.login}/>
                        <Link to="/signup/" className="secondary-button">Sign Up</Link>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Login