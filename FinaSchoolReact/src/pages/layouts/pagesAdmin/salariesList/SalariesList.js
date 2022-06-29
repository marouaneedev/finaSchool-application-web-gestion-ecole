import React, { Component } from 'react'

export class SalariesList extends Component {
  render() {
    return (
      <div className="allContent">
        <div className="settingContent">
          {/* -------------start breadcrumb-------------- */}
          <h1 className="mt-4">Salaries List</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Salaries List</li>
          </ol>
          {/* -------------end breadcrumb-------------- */}
        </div>
      </div>
    );
  }
}

export default SalariesList