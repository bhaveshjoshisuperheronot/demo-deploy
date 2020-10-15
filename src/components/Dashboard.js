import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SidebarNav from '../components/SidebarNav'
import DashboardHeader from '../components/DashboardHeader'
import '../css/dashboard.css'
import { getProfileDetails, getBankDetails } from '../store/actions/dashboard';
import { connect } from 'react-redux'; 

class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state = {
                redirect: false
            }
    }

    componentDidMount() {
        if(this.props.redirect){
            if(!this.props.callGetApi){
                let data = this.props.id;
                this.props.getProfileDetails({userId: data})
                this.props.getBankDetails({userId: data})
            }
        }else{
            this.setState({
                redirect: true
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
                            <div className="page--title">Dashboard</div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        callGetApi: state.userData.callGetApi,
        id: state.auth.id,
        redirect: state.auth.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileDetails: (data) => dispatch(getProfileDetails(data)),
        getBankDetails: (data) => dispatch(getBankDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
