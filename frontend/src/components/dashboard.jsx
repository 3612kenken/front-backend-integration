import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Charts from "./charts";
import "./style.css";

export default function Dashboard() {
  return (
    <>
      <div className="container">
        <h3>Kenneth Omiping's Dashboard</h3>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line Chart</h4>
                <p className="card-text">This is Line Chart</p>
                <div id="chart" class="main-size"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bar Chart</h4>
                <p className="card-text" class="main-size">
                  This is Bar Chart
                </p>
                <div id="chart2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pie Chart</h4>
                <p className="card-text">This is Pie Chart</p>
                <div id="piechart" class="main-size"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Dougnut Chart</h4>
                <p className="card-text">This is Dougnut Chart</p>
                <div id="doughnut" class="main-size"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Charts />
      <Footer />
    </>
  );
}
