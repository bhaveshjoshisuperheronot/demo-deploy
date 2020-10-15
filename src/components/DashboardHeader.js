import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import logo from '../media/bokoo-logo.png';
import { connect } from 'react-redux';

class DashboardHeader extends Component {
    
    constructor(props){   
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var minutes;
        var hours;
        var date;
        if(new Date().getMinutes() < 10){
            minutes = '0'+ new Date().getMinutes().toLocaleString();
        }else{
            minutes = new Date().getMinutes().toLocaleString();
        }
        if(new Date().getHours() < 10){
            hours = '0'+ new Date().getHours().toLocaleString();
        }else{
            hours = new Date().getHours().toLocaleString();
        }
        if(new Date().getDate() < 10){
            date = '0'+ new Date().getDate().toLocaleString();
        }else{
            date = new Date().getDate().toLocaleString();
        }
        super(props);
            this.state = {
                date:  date,
                month:  monthNames[new Date().getMonth()],
                year:  new Date().getFullYear(),
                hours: hours,
                minutes: minutes
            }
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var minutes;
        var hours;
        var date;
        if(new Date().getMinutes() < 10){
            minutes = '0'+ new Date().getMinutes().toLocaleString();
        }else{
            minutes = new Date().getMinutes().toLocaleString();
        }
        if(new Date().getHours() < 10){
            hours = '0'+ new Date().getHours().toLocaleString();
        }else{
            hours = new Date().getHours().toLocaleString();
        }
        if(new Date().getDate() < 10){
            date = '0'+ new Date().getDate().toLocaleString();
        }else{
            date = new Date().getDate().toLocaleString();
        }
        this.setState({
            date:  date,
            month:  monthNames[new Date().getMonth()],
            year:  new Date().getFullYear(),
            hours: hours,
            minutes: minutes
        });
    }
    
    

    render() {
        return(            
                <div className="dashboard-header dis-flex">
                    <div className="dashboard-header-logo"><Link to="/"><img alt='logo' src={logo}/></Link></div>
                    <div className="dashboard-header-dateTime dis-flex">
                        <div className="dashboard-header-date">{this.state.date} {this.state.month}, {this.state.year}</div>
                        <div className="dashboard-header-time">{this.state.hours}:{this.state.minutes}</div>
                    </div>
                    <div className="dashboard-header-name">Welcome, { this.props.name }</div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name
    }
}

export default connect(mapStateToProps)(DashboardHeader);