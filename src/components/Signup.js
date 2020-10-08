import React, { Component } from 'react'
import {PostData} from '../services/PostData'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'

class Signup extends Component {
    constructor(props){
        super(props);
            this.state = {
                'name': '',
                'email': '',
                'mobile': '',
                'password': '',
                'password_confirmation' : '',              
                'redirect': false
            }
        
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    signup() {

        if(this.state.email && this.state.password){
            PostData('register', this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData', responseJson);
                    this.setState({
                        redirect: true
                    })
                }else{
                    console.log('Sign Up Error');
                    alert(responseJson.message)
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
                    <h4 className="col s12">Sign Up</h4>
                    <div className="col s6">
                        <div className="input--field-box">
                            <input 
                            className={`input--field ${(this.state.name)? 'focused' : '' }`}
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            onChange={this.onChange} 
                            onBlur={this.onBlur}/>
                            <label>Full Name</label>
                        </div>
                        <div className="input--field-box">
                            <input 
                            className={`input--field ${(this.state.mobile)? 'focused' : '' }`}
                            type="number" 
                            name="mobile" 
                            placeholder="9876543210" 
                            onChange={this.onChange} 
                            onBlur={this.onBlur}/>
                            <label>Mobile Number</label>
                        </div>
                    </div>
                    <div className="col s6">
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
                        <div className="input--field-box">
                            <input
                            className={`input--field ${(this.state.password_confirmation)? 'focused' : '' }`}
                            type="password" 
                            name="password_confirmation" 
                            onChange={this.onChange} 
                            onBlur={this.onBlur}/>
                            <label>Confirm Password</label>
                        </div>
                        <input type="submit" value="Sign Up" className="secondary-button" onClick={this.signup}/>
                        <Link className="button" to="/login/">Login</Link>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Signup