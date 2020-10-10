import React, { Component } from 'react'
import {PostData} from '../services/PostData'
// import {GetData} from '../services/GetData'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'

class Logout extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: '',
                password: '',
                redirect: false
            }
        
        this.logout = this.logout.bind(this);
    }

    logout() {        
            PostData('logout', this.state).then((result) => {
              localStorage.clear();
              this.setState({
                redirect: true
              })
            })
        
    }

    componentDidMount() {
        
    }


    render() {
        if(this.state.redirect) {
            return(<Redirect to={'/login'}/>)
        }

        return(
            <div className="login-box-parent">
                <div className="login-box row">
                    <div className="col s12">
                        <h4>Do you want to Logout?</h4>
                        <input type="submit" value="Logout" className="button" onClick={this.logout}/>
                        <Link to="/dashboard/" className="secondary-button">Back to Dashboard</Link>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Logout