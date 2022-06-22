import React, { Component } from "react";
import "./dashboard.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { PieChart, Pie, Cell } from "recharts";

class Dashboard extends Component {
  render() {
    /* start chart 1 */
    const data = [{ name: "Boys", value: 400 }, { name: "Girls", value: 300 }];
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
    /* end chart 1 */
    return (
      <div className="allContent">
        <div className="dachboradContent">
          {/* -------------start breadcrumb-------------- */}
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          {/* -------------end breadcrumb-------------- */}

          {/* -------------start boxes-------------- */}
          <div className="row boxes">
            <div className="col-xl-3 col-md-6 box">
              <div className="card one">
                <div className="card-body">
                  <div className="headerr">
                    <h3>
                      <BsFillPeopleFill className="icon" />
                    </h3>
                    <h3 className="name">Students</h3>
                  </div>
                  <div className="footerr">
                    <h3 className="num">45</h3>
                    <p className="card-text">View Details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 box">
              <div className="card two">
                <div className="card-body">
                  <div className="headerr">
                    <h3>
                      <IoPeopleCircleOutline className="icon" />
                    </h3>
                    <h3 className="name">Teachers</h3>
                  </div>
                  <div className="footerr">
                    <h3 className="num">76</h3>
                    <p className="card-text">View Details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 box">
              <div className="card three">
                <div className="card-body">
                  <div className="headerr">
                    <h3>
                      <GiConfirmed className="icon" />
                    </h3>
                    <h3 className="name">Insciption</h3>
                  </div>
                  <div className="footerr">
                    <h3 className="num">33</h3>
                    <p className="card-text">View Details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 box">
              <div className="card four">
                <div className="card-body">
                  <div className="headerr">
                    <h3>
                      <AiOutlineMessage className="icon" />
                    </h3>
                    <h3 className="name">Messages</h3>
                  </div>
                  <div className="footerr">
                    <h3 className="num">56</h3>
                    <p className="card-text">View Details</p>
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
              <div className="col-lg-6 chart1">
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
                </div>
              </div>
              {/* ----------end charts 1----------- */}

              {/* ----------start charts 2----------- */}
              <div className="col-lg-6 chart2">
                <div className="card-body">
                  <p>two</p>
                </div>
              </div>
              {/* ----------end charts 2----------- */}
            </div>
          </div>
          {/* ----------end charts box----------- */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
