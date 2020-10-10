import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SidebarNav from '../components/SidebarNav'
import DashboardHeader from '../components/DashboardHeader'
import '../css/dashboard.css'
 
class ContentLibrary extends Component {
    constructor(props){
        super(props);
            this.state = {
                redirect: false
            }
    }

    componentDidMount() {
        if(localStorage.getItem('userData')){

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
                            <div className="page--title">Content Library</div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default ContentLibrary
