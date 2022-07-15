import React, { Component } from 'react'

export class Formation extends Component {
  render() {
    return (
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h1 className="mt-4">Formation</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Formation</li>
        </ol>
        {/* -------------end breadcrumb-------------- */}
      </div>
    );
  }
}

export default Formation

