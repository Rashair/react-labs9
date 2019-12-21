import React from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";

import { loadEmployees } from "../redux/thunk-functions";

const EmployeeLine = ({ employee }) => (
  <div>
    {employee.name} ({employee.age} yrs old): {employee.company}
  </div>
);

class PageEmployeesList extends React.Component {
  componentDidMount() {
    if (this.props.user === null) {
      this.props.history.push("/");
    }

    if (this.props.employeesFetched === true) {
      return;
    }

    this.props.loadEmployees();
  }

  render() {
    const { employees, isLoading, user } = this.props;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="row mt-2">
        <div className="col-sm-6">
          <h1>Employees List:</h1>
          {employees &&
            employees.map(employee => (
              <EmployeeLine
                key={employee._id === undefined ? employee.id : employee._id}
                employee={employee}
              />
            ))}
          <Link to="/new">
            <button type="button">Create employee</button>
          </Link>
        </div>
        <div className="offset-sm-1 align-text-top">
          <h3> Hi {user.full_name}!</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state /* , ownProps */) => {
  return {
    employees: state.employees,
    employeesFetched: state.employeesFetched,
    isLoading: state.isLoading,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  loadEmployees: () => dispatch(loadEmployees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageEmployeesList));
