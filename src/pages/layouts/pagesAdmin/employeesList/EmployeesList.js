import React, { Component } from "react";

class EmployeesList extends Component {
  render() {
    return (
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h1 className="mt-4">Employees List</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Employees List</li>
        </ol>
        {/* -------------end breadcrumb-------------- */}
      </div>
    );
  }
}

export default EmployeesList;
