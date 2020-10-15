import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import { signup, socialAuth } from '../store/actions/auth';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Signup extends Component {
    constructor(props){
        super(props);
            this.state = {
                name: '',
                email: '',
                mobile: '',
                password: '',
                password_confirmation : '',              
                redirect: false,
                userId: ''
            }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    

    handleSubmit = (e) => {
        if(this.state.email && this.state.password){
            this.props.signup(this.state)
        }
    }

    responseGoogle(res) {
        console.log(res)
        const userData = {
            type: 'googleLogin',
            access_token : res.accessToken,
            name: res.profileObj.name,
            email: res.profileObj.email,
            profileObj: res.profileObj
        }
        this.props.socialAuth(userData)
    }
    responseFacebook(res) {
        console.log(res)
        const userData = {
             type: 'fbLogin',
             access_token : res.accessToken,
             name: res.name,
             email: res.email,
             profileObj: res
         }
         this.props.socialAuth(userData)
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
        if(this.props.redirect) {
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
                        <input type="submit" value="Sign Up" className="secondary-button" onClick={this.handleSubmit}/>
                        <Link className="button" to="/login/">Login</Link>
                        <GoogleLogin
                            clientId="526757781205-s2rgq6tdurv3shutf49iu037qflhe5e5.apps.googleusercontent.com"
                            buttonText="Login"
                            scope="https://www.googleapis.com/auth/user.birthday.read"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="1035097680244932"
                            fields="name,email,picture"
                            callback={this.responseFacebook} />
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
        signup: (creds) => dispatch(signup(creds)),
        socialAuth: (creds) => dispatch(socialAuth(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);