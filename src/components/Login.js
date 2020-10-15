import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import { login, socialAuth } from '../store/actions/auth';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

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
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(res) {
        console.log(res)
        const userData = {
            type: 'googleLogin',
            name: res.profileObj.name,
            email: res.profileObj.email,
            data: {
                access_token : res.accessToken,
                profileObj: res.profileObj
            }            
        }
        this.props.socialAuth(userData)
    }
    responseFacebook(res) {
        console.log(res)
        const userData = {
             type: 'fbLogin',             
             name: res.name,
             email: res.email,
             data: {
                access_token : res.accessToken,
                profileObj: res
            }             
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
                    <div className="close-button" onClick={this.props.triggerCallClosePopUp}>&#10006;</div>
                    <div className="col s12">
                        <h4>Sign In</h4>
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
                        
                        <div className="social--login">
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
                            callback={this.responseFacebook}
                            textButton="FB"
                        />
                        </div>
                        <div className="sign-up-text">Click here to <Link onClick={this.props.triggerCallSignUp}>SIGN UP</Link> for a Free Account</div>
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
        login: (creds) => dispatch(login(creds)),
        socialAuth: (creds) => dispatch(socialAuth(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);