import React, { Component } from "react";

export class StudentsPayment extends Component {
  render() {
    return (
      <div className="allContent">
        <div className="settingContent">
          {/* -------------start breadcrumb-------------- */}
          <h1 className="mt-4">Students Payment</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Students Payment</li>
          </ol>
          {/* -------------end breadcrumb-------------- */}
        </div>
      </div>
    );
  }
}

export default StudentsPayment;
