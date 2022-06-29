import React, { Component } from "react";
import "./settingPage.css";
class SettingPage extends Component {
  render() {
    return (
      <div className="allContent">
        <div className="settingContent">
          {/* -------------start breadcrumb-------------- */}
          <h1 className="mt-4">Setting</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Setting</li>
          </ol>
          {/* -------------end breadcrumb-------------- */}
        </div>
      </div>
    );
  }
}

export default SettingPage;
