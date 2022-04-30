import React, { Component } from "react";

export class StudentsList extends Component {
  render() {
    return (
      <div className="allContent">
        <div className="settingContent">
          {/* -------------start breadcrumb-------------- */}
          <h1 className="mt-4">Students List</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Students List</li>
          </ol>
          {/* -------------end breadcrumb-------------- */}
        </div>
      </div>
    );
  }
}

export default StudentsList;
