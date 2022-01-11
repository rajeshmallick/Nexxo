import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeDetail: {
        userId: "",
        firstName: "",
        lastName: "",
        age: "",
      },
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${this.props.match.params.id}`)
      .then((response) => {
        console.log(response, "mydata");
        this.setState({
          employeeDetail: {
            userId: response.data[0].id,
            firstName: response.data[0].firstName,
            lastName: response.data[0].lastName,
            age: response.data[0].age,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="text-center">
        <h1>User Detail</h1>
        <p>
          <b>User Id :</b> {this.state.employeeDetail.userId}
        </p>
        <p>
          <b>First Name:</b> {this.state.employeeDetail.firstName}
        </p>
        <p>
          <b>Last Name:</b> {this.state.employeeDetail.lastName}
        </p>
        <p>
          <b>Age:</b> {this.state.employeeDetail.age}
        </p>
        <div className="text-center">
          <Link className="blackButton" to="/listpage">
            Back Listpage
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailPage);
