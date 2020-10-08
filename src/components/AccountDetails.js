import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SidebarNav from '../components/SidebarNav'
import DashboardHeader from '../components/DashboardHeader'
import '../css/dashboard.css'
 
class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state = {
                redirect: false,
                registeredAs: 'Company'
            }
            this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidMount() {
        if(sessionStorage.getItem('userData')){
            console.log('Call Dashboard');
        }else{
            this.setState({
                //redirect: true
            })
        }
    }

    onValueChange(event) {
        this.setState({
            registeredAs: event.target.value
        });
    }

    render() {

        if(this.state.redirect) {
            return(<Redirect to={'/login'}/>)
        }

        return(
            
                <div className="wrapper">
                    <DashboardHeader/>
                    <div className="dashboard-page">
                        <div className="sidebar-parent">
                            <SidebarNav />
                        </div>
                        <div className="main-content-parent">
                            <div className="page--title">Account Details</div>
                            <div className="page--content">
                                <div className="page--content-title-list dis-flex">
                                    <div className="page--content-title page--content-title-1 active">Profile Details</div>
                                    <div className="page--content-title page--content-title-2">Change Password</div>
                                    <div className="page--content-title page--content-title-3">Bank Details</div>
                                    <div className="page--content-title page--content-title-4">Help</div>
                                </div>
                                <div className="page--content-main">
                                    <form>
                                        <div className="radio">
                                            <label>
                                                <input
                                                className="radio-btn"
                                                type="radio"
                                                value="Company"
                                                checked={this.state.registeredAs === "Company"}
                                                onChange={this.onValueChange}
                                                />
                                                Company
                                            </label>
                                            <label>
                                                <input
                                                className="radio-btn"
                                                type="radio"
                                                value="Individual"
                                                checked={this.state.registeredAs === "Individual"}
                                                onChange={this.onValueChange}
                                                />
                                                Individual
                                            </label>
                                        </div>
                                        <div className="row">
                                            <div className="col s4"> 
                                                <label>COMPANY NAME</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>DOING BUSINESS AS</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>COMPANY TYPE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>PRIMARY BUSINESS</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>COMPANY WEBSITE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>LINKEDIN PROFILE</label>
                                                <input type='text'/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s4"> 
                                                <label>TITLE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>FIRST NAME</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>LAST NAME</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>EMAIL</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>SECONDARY EMAIL</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>WEBSITE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>EMAIL</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>SECONDARY EMAIL</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>MOBILR</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>OFFICE NUMBER</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s8">
                                                <label>ADDRESS</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>CITY</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>STATE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>ZIP/POSTAL CODE</label>
                                                <input type='text'/>
                                            </div>
                                            <div className="col s4">
                                                <label>COUNTRY</label>
                                                <input type='text'/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Dashboard
