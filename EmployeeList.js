// resources\js\components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// For notification toast
import Notifications, {notify} from 'react-notify-toast';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        employees: [],
    };

    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(empId) {
    if( confirm('Are you sure?') )
    {
      let employees = this.state.employees;
      let index = employees.findIndex(employee => employee.id === empId);
      employees.splice(index, 1);

      // Delete the project from table
      axios.post('/api/employees/delete/' + empId, {
        // name: this.state.projectName,
      })
      .then(function (response) {
        let myColor = { background: '#3CB371', text: "#FFFFFF" };
        notify.show(response.data.msg, "custom", 2000, myColor);
      })
      .catch(function (error) {
        let myColor = { background: '#FF6347', text: "#FFFFFF" };
        notify.show(response.data.msg, "custom", 2000, myColor);
      });

      // // Set the state
      this.setState({ employees });
    }
  }

  componentDidMount() {
      // Get the listing of projects on component loading
      axios.get('/api/employees')
      .then(response => {
        const employees = response.data;
        this.setState({ employees });
      });
  }

  render() {
    return (
      <div>
        {/* To show the notification toast */}
        <div className='main'>
            <Notifications options={{zIndex: 200, top: '90%'}} />
        </div>

        <div className="text-center"><h3>Employee List</h3></div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Position</td>
              <td>Email</td>
              <td>Office</td>
              <td>Joining Date</td>
              <td>Age</td>
              <td>Salary</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map(( listValue, index ) => {
            return (
                <tr key={index}>
                  <td><Link to={`/edit/${listValue.id}`}>{listValue.first_name + ' ' + listValue.last_name}</Link></td>
                  <td>{listValue.position}</td>
                  <td>{listValue.email}</td>
                  <td>{listValue.office}</td>
                  <td>{listValue.start_date}</td>
                  <td>{listValue.age}</td>
                  <td>{listValue.salary}</td>
                  {/* Here listValue.status is a string and ternary operator works on integer only */}
                  <td data={listValue.status}>{parseInt(listValue.status) ? 'Working' : 'Ex-Employee'}</td>
                  <td><a href="javascript:void(0);" onClick={() => this.deleteEmployee(listValue.id)}>Delete</a></td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
