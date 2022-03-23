import React from "react";
import { useEffect, useState } from "react";
// import "../pages/Searchpage.css";
import "../App.css";
import Navbar from "../components/Navbar";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

function Search() {
  const [Country, setCountry] = useState("");
  const [TotalCases, setCases] = useState("");
  const [TotalRecovered, setRecovered] = useState("");
  const [TotalDeaths, setDeaths] = useState("");

  const [totaldata, settotaldata] = useState();

  const [userInput, setUserInput] = useState("");

  const [about, setabout] = useState();

  const [entry, setEntry] = useState(false);

  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((res) => res.json())
      .then((data) => {
        settotaldata(data.data);
      });
  }, []);

  const setData = ({ Country, TotalCases, TotalDeaths, TotalRecovered }) => {
    setCountry(Country);
    setCases(TotalCases);
    setRecovered(TotalRecovered);
    setDeaths(TotalDeaths);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch(`https://covidpagination.herokuapp.com/country/${userInput}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //       console.log("data")
    //     setData(data);

    //   });
    // totaldata.map((e)=>{
    //     if((e.Country).includes(userInput)){
    //         console.log("worked");
    //     }
    // })
    setEntry(true);
    for (let i = 0; i < totaldata.length; i++) {
      if (totaldata[i].Country == userInput) {
        setabout(totaldata[i]);

        // console.log(totaldata[i])

        // console.log("worked")
      }
    }

    // console.log(about)
  };

  return (
    <div>
      <Navbar />
      <div className="covidData">
        <h1>COVID-19 CASES COUNTRY WISE</h1>
        <div className="covidData__input">
          <form onSubmit={handleSubmit}>
            {/* input county name */}
            <input onChange={handleSearch} placeholder="Enter Country Name" />
            <br />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* Showing the details of the country */}
        <div className="covidData__country__info">
          {entry ? (
            <>
              {" "}
              <p>Country Name : {about.Country} </p>
              <p>TotalCase : {about.TotalCases}</p>
              <p>Active Cases : {about.ActiveCases}</p>
              <p>Recovered Cases : {about.TotalRecovered}</p>
              <p>Total Deaths : {about.TotalDeaths}</p>{" "}
            </>
          ) : (
            <> Please Enter Country Name</>
          )}
        </div>

        {entry ? (
          <>
            <div
              className="chart"
              style={{ width: "300px", marginTop: "10%", marginLeft: "15%" }}
            >
              <Pie
                data={{
                  labels: [
                    "TotalCases",
                    "ActiveCases",
                    "TotalDeaths",
                    "RecoveredCases",
                  ],

                  datasets: [
                    {
                      data: [
                        about.TotalCases,
                        about.ActiveCases,
                        about.TotalRecovered,
                        about.TotalDeaths,
                        // 1000,847757,478587
                      ],
                      label: "data-analysis",
                      backgroundColor: ["blue", "orange", "red", "green"],
                    },
                  ],
                }}
                // options={{
                //     tooltips:{
                //         callbacks:{
                //             label:function(toolTipItem){
                //                 return("$+toolTipItem.value")

                //             }
                //         }
                //     }
                // }}
              >
                {" "}
              </Pie>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
