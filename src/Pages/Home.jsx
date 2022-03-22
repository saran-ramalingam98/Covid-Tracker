import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [country, setCountry] = useState([]);
  const [activecase, setActiveCase] = useState();
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

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Navbar />
      <br></br>
      <div className="row container">
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="header">Covid-19</div>
          <div>Global Cases</div>
          <br></br>
          <div className="bg-secondary bg-opacity-25 container">
            <div className=" fs-4 text-primary">Total Cases</div>
            <h2>
              {country.reduce((current, previous) => {
                return Number(current) + Number(previous.TotalCases);
              }, 0)}
            </h2>
            <br></br>
            <div className=" fs-4 text-success">Recovered Cases</div>
            <h2>
              {country.reduce((current, previous) => {
                return Number(current) + Number(previous.TotalRecovered);
              }, 0)}
            </h2>
            <br></br>
            <div className=" fs-4 text-warning">Active Cases</div>
            <h2>
              {country.reduce((current, previous) => {
                return Number(current) + Number(previous.ActiveCases);
              }, 0)}
            </h2>
            <br></br>
            <div className=" fs-4 text-danger">Deaths</div>
            <h2>
              {country.reduce((current, previous) => {
                return Number(current) + Number(previous.TotalDeaths);
              }, 0)}
            </h2>
            <br></br>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
          <div className="h1">Covid-19</div>
        </div>
      </div>
    </div>
  );
}
