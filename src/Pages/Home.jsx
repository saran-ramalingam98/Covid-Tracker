import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default function Home() {
  const [country, setCountry] = useState([]);
  const fetchdata = async () => {
    try {
      const Countrydata = await axios.get(
        "https://covidpagination.herokuapp.com/country"
      );
      setCountry(Countrydata.data.data);
      //   console.log(Countrydata.data.data[0].ActiveCases);
    } catch (err) {
      console.error(err);
    }
  };
  const state = {
    labels: country.map((emp) => emp.Country),
    datasets: [
      {
        axis: "y",
        label: "TotalCases",
        lineTension: 0.0,
        backgroundColor: "#4287f5",
        borderColor: "#0004fc",
        pointHitRadius: 20,
        borderWidth: 3,
        data: country.map((emp) => emp.TotalCases),
      },
      {
        axis: "y",
        label: "TotalRecovered",
        lineTension: 0.0,
        backgroundColor: "#8feb67",
        borderColor: "#46e800",
        pointHitRadius: 20,
        borderWidth: 3,
        data: country.map((emp) => emp.TotalRecovered),
      },
      {
        axis: "y",
        label: "ActiveCases",
        lineTension: 5.0,
        backgroundColor: "#ebeb63",
        borderColor: "#e8e800",
        pointHitRadius: 20,
        borderWidth: 3,
        data: country.map((emp) => emp.ActiveCases),
      },
      {
        axis: "y",
        label: "Death",
        lineTension: 5.0,
        backgroundColor: "#f05648",
        borderColor: "#fc1500",
        pointHitRadius: 20,
        borderWidth: 3,
        data: country.map((emp) => emp.TotalDeaths),
      },
    ],
  };

  const options = {
    categoryPercentage: 0.8,
    barPercentage: 1,
    indexAxis: "y",
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 8,
          },
          minRotation: 20,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 15,
          },
          minRotation: 20,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    // title: {
    //   display: true,
    //   text: "Average Rainfall per month",
    //   fontSize: 20,
    //   color: "white",
    // },
    // legend: {
    //   display: true,
    //   position: "right",
    // },
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const Total = country.reduce((current, previous) => {
    return Number(current) + Number(previous.TotalCases);
  }, 0);

  const Recover = country.reduce((current, previous) => {
    return Number(current) + Number(previous.TotalRecovered);
  }, 0);
  const Active = country.reduce((current, previous) => {
    return Number(current) + Number(previous.ActiveCases);
  }, 0);
  const Deaths = country.reduce((current, previous) => {
    return Number(current) + Number(previous.TotalDeaths);
  }, 0);

  return (
    <div className="main">
      <Navbar />
      <br></br>
      <div className="row container">
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="header">Covid-19</div>
          <div>Global Cases</div>
          <br></br>
          <div className="bg-secondary bg-opacity-25 container">
            <div className=" fs-4 text-primary">Total Cases</div>
            <h2>{Total}</h2>
            <br></br>
            <div className=" fs-4 text-success">Recovered Cases</div>
            <h2>{Recover}</h2>
            <br></br>
            <div className=" fs-4 text-warning">Active Cases</div>
            <h2>{Active}</h2>
            <br></br>
            <div className=" fs-4 text-danger">Deaths</div>
            <h2>{Deaths}</h2>
            <br></br>
          </div>
        </div>
        <div className=" container col-md-6 col-lg-6 col-xl-6 col-sm-12 scrollmap">
          <Bar
            data={state}
            options={options}
            className="chart"
            width={50}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
