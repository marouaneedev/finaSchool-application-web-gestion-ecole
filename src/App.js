import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Masterlayout from "./pages/layouts/admin/masterlayout/Masterlayout";
import Dashboard from "./pages/layouts/pagesAdmin/dashboard/Dashboard";
import StudentsList from "./pages/layouts/pagesAdmin/studentsList/StudentsList";
import SalariesList from "./pages/layouts/pagesAdmin/salariesList/SalariesList";
import SettingPage from "./pages/layouts/pagesAdmin/settingPage/SettingPage";
import MessagesPage from "./pages/layouts/pagesAdmin/messagesPage/MessagesPage";
import InsciptionPage from "./pages/layouts/pagesAdmin/insciptionPage/InsciptionPage";
import Revenu from "./pages/layouts/pagesAdmin/revenu/Revenu";
import Formation from "./pages/layouts/pagesAdmin/formation/Formation";
import Depense from "./pages/layouts/pagesAdmin/depense/Depense";

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
              <Route path="salariesList" element={<SalariesList />} />
              <Route path="setting" element={<SettingPage />} />
              <Route path="formation" element={<Formation />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="insciption" element={<InsciptionPage />} />
              <Route path="revenu" element={<Revenu />} />
              <Route path="depense" element={<Depense />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
/* hhhhhhhhhhhhh */