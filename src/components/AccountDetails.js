import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap-tabs'
import SidebarNav from '../components/SidebarNav'
import DashboardHeader from '../components/DashboardHeader'
import {PostData} from '../services/PostData'
import '../css/dashboard.css'
 
class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state = {
                redirect: false,
                registeredAs: 'Company'
            }
            this.onValueChange = this.onValueChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        if(this.state.email && this.state.password){
            
            PostData([e.target.name], this.state).then((result) => {
                let responseJson = result;
                console.log(responseJson)
            })
        }
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
                                {/* <div className="page--content-title-list dis-flex">
                                    <div className="page--content-title page--content-title-1 active">Profile Details</div>
                                    <div className="page--content-title page--content-title-2">Change Password</div>
                                    <div className="page--content-title page--content-title-3">Bank Details</div>
                                    <div className="page--content-title page--content-title-4">Help</div>
                                </div> */}
                                <div className="page--content-main">
                                    
                                    <Tabs defaultActiveKey="profile-details" onSelect={(_index, label) => console.log(label + ' selected')}>
                                        <Tab eventKey="profile-details" label="Profile Details">
                                                <div className="page--header-text">Register As</div>
                                                <div className="radio row">
                                                    <label className="col">
                                                        <input
                                                        className="radio-btn"
                                                        type="radio"
                                                        value="Company"
                                                        checked={this.state.registeredAs === "Company"}
                                                        onChange={this.onValueChange}
                                                        />
                                                        Company
                                                    </label>
                                                    <label className="col">
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
                                                        <label className="formLabels">COMPANY NAME</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">DOING BUSINESS AS</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COMPANY TYPE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">PRIMARY BUSINESS</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COMPANY WEBSITE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">LINKEDIN PROFILE</label>
                                                        <input type='text'/>
                                                    </div>
                                                </div>
                                                <div className="page--header-text">CP Admin</div>
                                                <div className="row">
                                                    <div className="col s4"> 
                                                        <label className="formLabels">TITLE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">FIRST NAME</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">LAST NAME</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">EMAIL</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">SECONDARY EMAIL</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">MOBILE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">OFFICE NUMBER</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s8">
                                                        <label className="formLabels">ADDRESS</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">CITY</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">STATE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">ZIP/POSTAL CODE</label>
                                                        <input type='text'/>
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COUNTRY</label>
                                                        <input type='text'/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="submit" value="Save" name="saveDetails" className="button" onClick={this.onSubmit}/>
                                                    </div>
                                                </div>
                                        </Tab>
                                        <Tab eventKey="change-password" label="Change Password">Tab 2 content</Tab>
                                        <Tab eventKey="bank-details" label="Bank Details">Tab 3 content</Tab>
                                        <Tab eventKey="help" label="Help">Tab 4 content</Tab>
                                    </Tabs>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Dashboard
