import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap-tabs'
import SidebarNav from '../components/SidebarNav'
import DashboardHeader from '../components/DashboardHeader'
import {PostData} from '../services/PostData'
import '../css/dashboard.css'
import { saveProfileDetails, saveBankDetails } from '../store/actions/dashboard';
import { connect } from 'react-redux'; 
 
class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state = {
                unmounted: false,
                redirect: false,
                userId: '',
                registeredAs: '1',
                companyName:'',
                doingBusinessAs: '',
                companyType: '',
                primaryBusiness: '',
                companyWebsite: '',
                linkedInProfile: '',
                title: '',
                firstName: '',
                lastName: '',
                secondaryEmail: '',
                officeNumber: '',
                address: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                taxType: '2',
                taxId: '',
                accountNumber: '',
                bankName: '',
                branchAddress: '',
                accountType: '',
                accountHolderName: '',
                routingNumber: '',
                paypalId: '',
                swiftCode: '',
                previous_password: '',
                new_password: '',
                new_password_confirmation: ''
            }
            this.onValueChange = this.onValueChange.bind(this);
            this.saveDetails = this.saveDetails.bind(this);
            this.saveBankDetails = this.saveBankDetails.bind(this);            
            this.updatePassword = this.updatePassword.bind(this);            
            this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        if(this.props.redirect){
            this.setState({
                companyName: this.props.companyName,
                doingBusinessAs: this.props.doingBusinessAs,
                companyType: this.props.companyType,
                primaryBusiness: this.props.primaryBusiness,
                companyWebsite: this.props.companyWebsite,
                linkedInProfile: this.props.linkedInProfile,
                title: this.props.title,
                secondaryEmail: this.props.secondaryEmail,
                officeNumber: this.props.officeNumber,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                postalCode: this.props.postalCode,
                country: this.props.country,
                taxType: this.props.taxType,
                taxId: this.props.taxId,
                accountNumber: this.props.accountNumber,
                bankName: this.props.bankName,
                branchAddress: this.props.branchAddress,
                accountType: this.props.accountType,
                accountHolderName: this.props.accountHolderName,
                routingNumber: this.props.routingNumber,
                paypalId: this.props.paypalId,
                swiftCode: this.props.swiftCode,
                userId: this.state.id,
                firstName: this.props.name,
                email: this.props.email,
                mobile: this.props.mobile
            })
        }else{
            this.setState({
                redirect: true
            })
        }
        
        
    }
    componentWillUnmount() {
        this.setState({
            unmounted: true
        })
    }

    onValueChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    updatePassword(e) {
        const userData = {
            userId: this.state.userId,
            previous_password: this.state.previous_password,
            new_password: this.state.new_password,
            new_password_confirmation: this.state.new_password_confirmation
        }

        PostData('user/change-user-password', userData).then((result) => {
            let responseJson = result;
            console.log(responseJson)
        })
    }

    saveDetails(e) {
        const userData = {
            userId: this.props.id,
            companyName: this.state.companyName,
            doingBusinessAs: this.state.doingBusinessAs,
            companyType: this.state.companyType,
            primaryBusiness: this.state.primaryBusiness,
            companyWebsite: this.state.companyWebsite,
            linkedInProfile: this.state.linkedInProfile,
            title: this.state.title,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            secondaryEmail: this.state.secondaryEmail,
            officeNumber: this.state.officeNumber,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            postalCode: this.state.postalCode,
            country: this.state.country
        }

        this.props.saveProfileDetails(userData)
        
    }

    saveBankDetails(e) {
        const userData = {
            userId: this.props.id,
            taxType: this.state.taxType,
            taxId: this.state.taxId,
            accountNumber: this.state.accountNumber,
            bankName: this.state.bankName,
            branchAddress: this.state.branchAddress,
            accountType: this.state.accountType,
            accountHolderName: this.state.accountHolderName,
            routingNumber: this.state.routingNumber,
            paypalId: this.state.paypalId,
            swiftCode: this.state.swiftCode
        }

        this.props.saveBankDetails(userData)
        
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
                                                        value="1"
                                                        name="registeredAs"
                                                        checked={this.state.registeredAs === "1"}
                                                        onChange={this.onValueChange}
                                                        />
                                                        Company
                                                    </label>
                                                    <label className="col">
                                                        <input
                                                        className="radio-btn"
                                                        type="radio"
                                                        value="2"
                                                        name="registeredAs"
                                                        checked={this.state.registeredAs === "2"}
                                                        onChange={this.onValueChange}
                                                        />
                                                        Individual
                                                    </label>
                                                </div>
                                                <div className="row">
                                                    <div className="col s4"> 
                                                        <label className="formLabels">COMPANY NAME</label>
                                                        <input 
                                                              type='text'
                                                              name='companyName'
                                                              onChange={this.onChange}
                                                              value={this.state.companyName}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">DOING BUSINESS AS</label>
                                                        <input 
                                                              type='text'
                                                              name='doingBusinessAs'
                                                              onChange={this.onChange}
                                                              value={this.state.doingBusinessAs}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COMPANY TYPE</label>
                                                        <input 
                                                              type='text'
                                                              name='companyType'
                                                              onChange={this.onChange}
                                                              value={this.state.companyType}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">PRIMARY BUSINESS</label>
                                                        <input 
                                                              type='text'
                                                              name='primaryBusiness'
                                                              onChange={this.onChange}
                                                              value={this.state.primaryBusiness}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COMPANY WEBSITE</label>
                                                        <input 
                                                              type='text'
                                                              name='companyWebsite'
                                                              onChange={this.onChange}
                                                              value={this.state.companyWebsite}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">LINKEDIN PROFILE</label>
                                                        <input 
                                                              type='text'
                                                              name='linkedInProfile'
                                                              onChange={this.onChange}
                                                              value={this.state.linkedInProfile}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="page--header-text">CP Admin</div>
                                                <div className="row">
                                                    <div className="col s4"> 
                                                        <label className="formLabels">TITLE</label>
                                                        <input 
                                                              type='text'
                                                              name='title'
                                                              onChange={this.onChange}
                                                              value={this.state.title}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">FIRST NAME</label>
                                                        <input 
                                                              type='text'
                                                              name='firstName'
                                                              onChange={this.onChange}
                                                              value={this.state.firstName}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">LAST NAME</label>
                                                        <input 
                                                              type='text'
                                                              name='lastName'
                                                              onChange={this.onChange}
                                                              value={this.state.lastName}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">EMAIL</label>
                                                        <input 
                                                              type='email'
                                                              name='email'
                                                              onChange={this.onChange}
                                                              value={this.state.email}
                                                              disabled
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">SECONDARY EMAIL</label>
                                                        <input 
                                                              type='email'
                                                              name='secondaryEmail'
                                                              onChange={this.onChange}
                                                              value={this.state.secondaryEmail}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">MOBILE</label>
                                                        <input 
                                                              type='number'
                                                              name='mobile'
                                                              onChange={this.onChange}
                                                              value={this.state.mobile}
                                                              disabled
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">OFFICE NUMBER</label>
                                                        <input 
                                                              type='number'
                                                              name='officeNumber'
                                                              onChange={this.onChange}
                                                              value={this.state.officeNumber}
                                                        />
                                                    </div>
                                                    <div className="col s8">
                                                        <label className="formLabels">ADDRESS</label>
                                                        <input 
                                                              type='text'
                                                              name='address'
                                                              onChange={this.onChange}
                                                              value={this.state.address}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">CITY</label>
                                                        <input 
                                                              type='text'
                                                              name='city'
                                                              onChange={this.onChange}
                                                              value={this.state.city}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">STATE</label>
                                                        <input 
                                                              type='text'
                                                              name='state'
                                                              onChange={this.onChange}
                                                              value={this.state.state}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">ZIP/POSTAL CODE</label>
                                                        <input 
                                                              type='text'
                                                              name='postalCode'
                                                              onChange={this.onChange}
                                                              value={this.state.postalCode}
                                                        />
                                                    </div>
                                                    <div className="col s4">
                                                        <label className="formLabels">COUNTRY</label>
                                                        <input 
                                                              type='text'
                                                              name='country'
                                                              onChange={this.onChange}
                                                              value={this.state.country}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="submit" value="Save" name="saveDetails" className="button" onClick={this.saveDetails}/>
                                                    </div>
                                                </div>
                                        </Tab>
                                        <Tab eventKey="change-password" label="Change Password">
                                        <div className="page--header-text">Update Password</div>
                                        <div className="row">
                                                <div className="col s6">
                                                    <label className="formLabels">CURRENT PASSWORD</label>
                                                    <input 
                                                        type='password'
                                                        name='previous_password'
                                                        onChange={this.onChange}
                                                        value={this.state.previous_password}
                                                    />
                                                </div>
                                                <div className="col s6">
                                                </div>
                                                <div className="col s6"> 
                                                    <label className="formLabels">NEW PASSWORD</label>
                                                    <input 
                                                        type='password'
                                                        name='new_password'
                                                        onChange={this.onChange}
                                                        value={this.state.new_password}
                                                    />
                                                </div>
                                                <div className="col s6">
                                                    <label className="formLabels">CONFIRM NEW PASSWORD</label>
                                                    <input 
                                                        type='text'
                                                        name='new_password_confirmation'
                                                        onChange={this.onChange}
                                                        value={this.state.new_password_confirmation}
                                                    />
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <input type="submit" value="Save" name="updatePassword" className="button" onClick={this.updatePassword}/>
                                            </div>
                                        </div>
                                        
                                        </Tab>
                                        <Tab eventKey="bank-details" label="Bank Details">
                                            <div className="page--header-text">Tax Details</div>
                                            <div className="radio row">
                                                <label className="col">
                                                    <input
                                                    className="radio-btn"
                                                    type="radio"
                                                    value="1"
                                                    checked={this.state.taxType === "1"}
                                                    name="taxType"
                                                    onChange={this.onValueChange}
                                                    />
                                                    EIN (for company)
                                                </label>
                                                <label className="col">
                                                    <input
                                                    className="radio-btn"
                                                    type="radio"
                                                    value="2"
                                                    checked={this.state.taxType === "2"}
                                                    name="taxType"
                                                    onChange={this.onValueChange}
                                                    />
                                                    Social Security for Individual (for US Based)
                                                </label>
                                                <label className="col">
                                                    <input
                                                    className="radio-btn"
                                                    type="radio"
                                                    value="3"
                                                    checked={this.state.taxType === "3"}
                                                    name="taxType"
                                                    onChange={this.onValueChange}
                                                    />
                                                    Local Tax ID for International Users
                                                </label>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="col s4"> 
                                                        <label className="formLabels">TAX ID (if any)</label>
                                                        <input 
                                                              type='text'
                                                              name='taxId'
                                                              onChange={this.onChange}
                                                              value={this.state.taxId}
                                                        />
                                                </div>
                                            </div>
                                            <div className="page--header-text">Bank Details</div>
                                            <div className="row">
                                                <div className="col s6"> 
                                                    <label className="formLabels">NAME OF THE ACCOUNT HOLDER</label>
                                                    <input 
                                                        type='text'
                                                        name='accountHolderName'
                                                        onChange={this.onChange}
                                                        value={this.state.accountHolderName}
                                                    />
                                                </div>
                                                <div className="col s6">
                                                    <label className="formLabels">NAME OF THE BANK</label>
                                                    <input 
                                                        type='text'
                                                        name='bankName'
                                                        onChange={this.onChange}
                                                        value={this.state.bankName}
                                                    />
                                                </div>
                                                <div className="col s6"> 
                                                    <label className="formLabels">BRANCH ADDRESS</label>
                                                    <textarea 
                                                        type='text'
                                                        name='branchAddress'
                                                        onChange={this.onChange}
                                                        value={this.state.branchAddress}
                                                    />
                                                </div>
                                                <div className="col s6">
                                                    <label className="formLabels">ACCOUNT NUMBER</label>
                                                    <input 
                                                        type='text'
                                                        name='accountNumber'
                                                        onChange={this.onChange}
                                                        value={this.state.accountNumber}
                                                    />
                                                    <label className="formLabels">ROUTING NUMBER</label>
                                                    <input 
                                                        type='text'
                                                        name='routingNumber'
                                                        onChange={this.onChange}
                                                        value={this.state.routingNumber}
                                                    />
                                                </div>
                                            </div>
                                            <div className="page--header-text">Other Details</div>
                                            <div className="row">
                                                <div className="col s6"> 
                                                    <label className="formLabels">PAYPAL ID</label>
                                                    <input 
                                                        type='text'
                                                        name='paypalId'
                                                        onChange={this.onChange}
                                                        value={this.state.paypalId}
                                                    />
                                                </div>
                                                <div className="col s6">
                                                    <label className="formLabels">SWIFT CODE</label>
                                                    <input 
                                                        type='text'
                                                        name='swiftCode'
                                                        onChange={this.onChange}
                                                        value={this.state.swiftCode}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="submit" value="Save" name="saveBankDetails" className="button" onClick={this.saveBankDetails}/>
                                                </div>
                                            </div>
                                        </Tab>
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


const mapStateToProps = (state) => {
    return {
        companyName: state.userData.companyName,
        doingBusinessAs: state.userData.doingBusinessAs,
        companyType: state.userData.companyType,
        primaryBusiness: state.userData.primaryBusiness,
        companyWebsite: state.userData.companyWebsite,
        linkedInProfile: state.userData.linkedInProfile,
        title: state.userData.title,
        secondaryEmail: state.userData.secondaryEmail,
        officeNumber: state.userData.officeNumber,
        address: state.userData.address,
        city: state.userData.city,
        state: state.userData.state,
        postalCode: state.userData.postalCode,
        country: state.userData.country,
        taxType: state.userData.taxType,
        taxId: state.userData.taxId,
        accountNumber: state.userData.accountNumber,
        bankName: state.userData.bankName,
        branchAddress: state.userData.branchAddress,
        accountType: state.userData.accountType,
        accountHolderName: state.userData.accountHolderName,
        routingNumber: state.userData.routingNumber,
        paypalId: state.userData.paypalId,
        swiftCode: state.userData.swiftCode,
        callGetApi: state.userData.callGetApi,
        id: state.auth.id,
        userId: state.auth.id,
        firstName: state.auth.name,
        email: state.auth.email,
        mobile: state.auth.mobile,
        redirect: state.auth.redirect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveProfileDetails: (data) => dispatch(saveProfileDetails(data)),
        saveBankDetails: (data) => dispatch(saveBankDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
