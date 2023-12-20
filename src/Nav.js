import logo from "./logo.svg";
import "./Nav.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img
            className="imgNav"
            src="https://www.svgrepo.com/show/30683/donut.svg"
          />
          <h1 className="Titre">KoiKou Plats</h1>
        </Link>
        <Link to="/">
          <p className="lien">RECETTES</p>
        </Link>
        <Link to="/formulaire">
          <p className="lien">SE CONNECTER</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
