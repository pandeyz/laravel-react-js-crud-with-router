// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container" style={{marginTop:'20px'}}>
          <div className="text-center"><h2>Employee Management System</h2></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/* Top navigation */}
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/add'} className="nav-link">Add Employee</Link></li>
                <li><Link to={'/employees'} className="nav-link">Employee List</Link></li>
              </ul>
            </nav>
          <hr />
          {/* Content according to the navigation selected */}
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add' component={AddEmployee} />
              <Route path='/employees' component={EmployeeList} />
              <Route path='/edit/:empId' component={EditEmployee} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
