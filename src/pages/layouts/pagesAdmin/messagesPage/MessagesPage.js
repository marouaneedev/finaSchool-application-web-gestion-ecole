import React, { Component } from "react";

class MessagesPage extends Component {
  render() {
    return (
      <div className="allContent">
        {/* -------------start breadcrumb-------------- */}
        <h1 className="mt-4">Messages</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Messages</li>
        </ol>
        {/* -------------end breadcrumb-------------- */}
      </div>
    );
  }
}

export default MessagesPage;
