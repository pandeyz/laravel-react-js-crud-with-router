// resources\js\components
import React, { Component } from 'react';

// For notification toast
import Notifications, {notify} from 'react-notify-toast';

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empFname: '',
      empLname: '',
      empPosition: '',
      empEmail: '',
      empOfficeLocation: '',
      empJoiningDate: '',
      empAge: '',
      empSalary: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    // To handle user input
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    // Set the state of every form element
    this.setState({ [event.target.name]: event.target.value });
  }

  /* To save project */
  handleSubmit(event) {
    event.preventDefault();

    // Validation

    axios.post('/api/employees', {
      empFname: this.state.empFname,
      empLname: this.state.empLname,
      empPosition: this.state.empPosition,
      empEmail: this.state.empEmail,
      empOfficeLocation: this.state.empOfficeLocation,
      empJoiningDate: this.state.empJoiningDate,
      empAge: this.state.empAge,
      empSalary: this.state.empSalary,
      empStatus: this.state.empStatus
    })
    .then(function (response) {
      if( response.statusText == 'OK' )
      {
        // alert('Project added successfully');
        let myColor = { background: '#3CB371', text: "#FFFFFF" };
        notify.show("Employee added successfully", "custom", 2000, myColor);

        document.getElementById('frm_add_employee').reset();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container" style={{marginBottom:'20px'}}>
        {/* To show the notification toast */}
        <div className='main'>
            <Notifications options={{zIndex: 200, top: '90%'}} />
        </div>
        <div className="text-center"><h3>Add Employee</h3></div>
        <div>
          <form id="frm_add_employee" className="form-horizontal" onSubmit={this.handleSubmit} autoComplete="off">
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                  <label>First Name:</label>
                  <input type="text" name="empFname" className="form-control" onChange={this.handleUserInput} />
                </div>
                <div className="col-lg-6">
                  <label>Last Name:</label>
                  <input type="text" name="empLname" className="form-control" onChange={this.handleUserInput} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Position:</label>
              <input type="text" name="empPosition" className="form-control" onChange={this.handleUserInput}/>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="empEmail" className="form-control" onChange={this.handleUserInput}/>
            </div>
            <div className="form-group">
              <label>Office Location:</label>
              <input type="text" name="empOfficeLocation" className="form-control" onChange={this.handleUserInput}/>
            </div>
            <div className="form-group">
              <label>Joining Date:</label>
              <input type="date" name="empJoiningDate" className="form-control" onChange={this.handleUserInput}/>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                  <label>Age:</label>
                  <input type="text" name="empAge" className="form-control" onChange={this.handleUserInput} />
                </div>
                <div className="col-lg-6">
                  <label>Salary:</label>
                  <input type="text" name="empSalary" className="form-control" onChange={this.handleUserInput} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Status:</label>
              <div className="radio">
                <label><input type="radio" name="empStatus" value="1" onChange={this.handleUserInput}/> Working</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="empStatus" value="0" onChange={this.handleUserInput}/> Ex-employee</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
