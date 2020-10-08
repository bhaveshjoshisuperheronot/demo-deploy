import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import AccountDetails from './components/AccountDetails'
import ContentLibrary from './components/ContentLibrary'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/account-details" component={AccountDetails} />
          <Route path="/content-library" component={ContentLibrary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;