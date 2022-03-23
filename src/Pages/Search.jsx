import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Search() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="Sea">
        <br></br>
        <br></br>

        <Container maxWidth="sm">
          <div className="border border-dark p-4 fs-6 rounded bg-secondary">
            <div className="covidData__input">
              <form onSubmit={handleSubmit}>
                <input onChange={handleSearch} style={{ width: "100%" }} />
                <br />
                <br></br>
                <div style={{ marginLeft: "40%" }}>
                  <Button variant="contained" type="submit">
                    <span className="fs-5">Search</span>
                  </Button>
                </div>
              </form>
            </div>
            <br></br>

            <div className="covidData__country__info">
              <p>Country Name : {country} </p>
              <p>Cases : {cases}</p>
              <p>Deaths : {deaths}</p>
              <p>Recovered : {recovered}</p>
              <p>Cases Today : {todayCases}</p>
              <p>Deaths Today : {deathCases}</p>
              <p>Recovered Today : {recoveredCases}</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Search;
