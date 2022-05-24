import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Masterlayout from "./pages/layouts/admin/masterlayout/Masterlayout";
import Dashboard from "./pages/layouts/pagesAdmin/dashboard/Dashboard";
import StudentsList from "./pages/layouts/pagesAdmin/studentsList/StudentsList";
import StudentsPayment from "./pages/layouts/pagesAdmin/studentsPayment/StudentsPayment";
import SettingPage from "./pages/layouts/pagesAdmin/settingPage/SettingPage";
import MessagesPage from "./pages/layouts/pagesAdmin/messagesPage/MessagesPage";
import InsciptionPage from "./pages/layouts/pagesAdmin/insciptionPage/InsciptionPage";
import EmployeesList from "./pages/layouts/pagesAdmin/employeesList/EmployeesList";
import EmployeesPayment from "./pages/layouts/pagesAdmin/employeesPayment/EmployeesPayment";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/hhh" element={<Masterlayout />}>
              <Route path="dashboard" exact element={<Dashboard />} />
              <Route path="studentsList" element={<StudentsList />} />
              <Route path="studentsPayment" element={<StudentsPayment />} />
              <Route path="setting" element={<SettingPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="insciption" element={<InsciptionPage />} />
              <Route path="employeesList" element={<EmployeesList />} />
              <Route path="employeesPayment" element={<EmployeesPayment />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
