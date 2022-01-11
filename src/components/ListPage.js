import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      totalPage: 0,
      start: 0,
      end: 0,
    };
    this.pageChange = this.pageChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1")
      .then((response) => {
        console.log(response.data, "mydata");
        let data = Math.floor(response.data.length / 10) + (response.data.length % 10 > 0 ? 1 : 0);
        this.setState({
          employees: response.data,
          totalPage: data,
          start: 0,
          end: data > 1 ? 10 : response.data.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  pageChange(value) {
    console.log(this);
    this.setState((state) => ({
      ...state,
      start: value * 10,
      end: value * 10 + 10,
    }));
  }

  render() {
    const { employees } = this.state;
    console.log(employees, "employeesData");
    return (
      <div>
        <h1>Employee's List</h1>
        <table className="empList">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {employees.length ? (
              employees.slice(this.state.start, this.state.end).map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <Link to={`/detailspage/${emp.id}`}>{emp.id}</Link>
                  </td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Loading.....</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination totalPage={this.state.totalPage} pageChange={this.pageChange} />
      </div>
    );
  }
}

export default ListPage;
