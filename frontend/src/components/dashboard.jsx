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
                <h4 className="card-title">Income</h4>
                <p className="card-text">This is Income by City</p>
                <div id="chart" class="main-size"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Investment</h4>
                <p className="card-text" class="main-size">
                  This is Bar Chart based on the investment of different owners.
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
                <h4 className="card-title">Gender</h4>
                <p className="card-text">
                  This is business owner gender based on the different
                  companies.
                </p>
                <div id="piechart" class="main-size"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Business Type</h4>
                <p className="card-text">This is total of Business Type</p>
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
