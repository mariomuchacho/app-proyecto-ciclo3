import React from "react";
import ImagenLogo from "./ImagenLogo";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navcomp">
          <Router>
            <Link to="/Inicio">
              <ImagenLogo />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/ListadoVentas">Ventas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/GestionUsuarios">Vendedores</Link>
                </li>
              </ul>
              <button className="nav-item btn btn-success">
                <Link to="/RegistroVentas">Nueva venta</Link>
              </button>
            </div>
          </Router>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
