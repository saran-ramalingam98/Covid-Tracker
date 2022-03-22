import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand ">
          <h1>Co -Dash</h1>
        </div>
        <div className="d-flex text-decoration-none">
          <Link to="/" className="text-decoration-none">
            {" "}
            <div className="px-2 fs-6 text-light ">Home</div>
          </Link>
          <Link to="/Global " className="text-decoration-none">
            <div className="px-2 fs-6 text-light">Global</div>
          </Link>
          <Link to="/Search" className="text-decoration-none">
            <div className="ps-2 pe-5 fs-6 text-light">Search</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
