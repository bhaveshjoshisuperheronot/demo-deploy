import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import AccountDetails from './components/AccountDetails'
import ContentLibrary from './components/ContentLibrary'
import Logout from './components/Logout'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/account-details" component={AccountDetails} />
          <Route path="/content-library" component={ContentLibrary} />
          <Route path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;