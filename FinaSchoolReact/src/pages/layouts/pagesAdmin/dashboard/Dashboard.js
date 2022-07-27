import React from "react";
import "./dashboard.css";
import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';


/* start chart 1 */

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const endPoint  = 'http://localhost:8000/api/dashboard'

export default function Dashboard() {
  let [dashboard, setDashboard] = useState([])
  const data = [{ name: "Boys", value: dashboard.studentH }, { name: "Girls", value: dashboard.studentF }];

  useEffect(() => {
    getDashboardInfos()
  }, [])

  const getDashboardInfos = async () => {
    const response = await axios.get(`${endPoint}`)
    setDashboard(response.data)
  }

  return (
    <div className="allContent">
      <div className="dachboradContent">
        {/* -------------start breadcrumb-------------- */}
        <h3 className="mt-2 mb-3">Dashboard : </h3>
        {/* -------------end breadcrumb-------------- */}

        {/* -------------start boxes-------------- */}
        <div className="row boxes">
          <div className="col-xl-3 col-md-6 box">
            <div className="card one">
              <div className="card-body">
                <div className="headerr">
                  <h3>
                    <GroupsIcon className="icon" />
                  </h3>
                  <h3 className="name">Étudiants</h3>
                </div>
                <div className="footerr">
                  <h3 className="num">{dashboard.studentH + dashboard.studentF}</h3>
                  <p className="card-text"><Link to="/students" className="link oneLink"> View Details </Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 box">
            <div className="card two">
              <div className="card-body">
                <div className="headerr">
                  <h3>
                    <GroupIcon className="icon" />
                  </h3>
                  <h3 className="name">Salariés</h3>
                </div>
                <div className="footerr">
                  <h3 className="num">{dashboard.emplyees}</h3>
                  <p className="card-text"><Link to="/salaries" className="link twoLink"> View Details </Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 box">
            <div className="card three">
              <div className="card-body">
                <div className="headerr">
                  <h3>
                    <SendIcon className="icon" />
                  </h3>
                  <h3 className="name">Inscription</h3>
                </div>
                <div className="footerr">
                  <h3 className="num">{dashboard.inscriptions}</h3>
                  <p className="card-text"><Link to="/inscription" className="link threeLink"> View Details </Link></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 box">
            <div className="card four">
              <div className="card-body">
                <div className="headerr">
                  <h3>
                    <MessageIcon className="icon" />
                  </h3>
                  <h3 className="name">Messages</h3>
                </div>
                <div className="footerr">
                  <h3 className="num">{dashboard.messages}</h3>
                  <p className="card-text"><Link to="/messages" className="link fourLink"> View Details </Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------end boxes-------------- */}

        {/* ----------start charts ----------- */}
        <div className="charts">
          <div className="row">
            {/* ----------start charts 1----------- */}
            <div className="col-lg-4 chart1">
              <div className="card">
                <div width="100%" height="100%">
                  <PieChart className="PieChart" width={300} height={300}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) =>
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      )}
                    </Pie>
                  </PieChart>
                  <div className="statiqueInfoChart d-flex justify-content-between">
                    <div className="girls d-flex">
                      <div className="femme mr-2"></div> <p>Homme</p>
                    </div>
                    <div className="boys d-flex ">
                      <span className="homme mr-2"></span> <p>Femme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------end charts 1----------- */}

            {/* ----------start charts 2----------- */}
            <div className="col-lg-8 chart2">
              <div className="card">
                <div className="card-body">
                  <BarChart
                    width={600}
                    height={300}
                    data={dashboard.chart}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Revenu" fill="#8884d8" />
                    <Bar dataKey="Dépense" fill="#82ca9d" />
                  </BarChart>
                </div>
              </div>
            </div>
            {/* ----------end charts 2----------- */}
          </div>
        </div>
        {/* ----------end charts box----------- */}
      </div>
    </div>
  )
}
