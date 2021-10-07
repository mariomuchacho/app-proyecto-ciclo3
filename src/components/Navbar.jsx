import React from "react";
import ImagenLogo from "./ImagenLogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navcomp">
          <Link to="./">
            <ImagenLogo />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="../pages/ListadoVentas">Ventas</Link>
              </li>
              <li className="nav-item">
                <Link to="../pages/GestionVendedores">Vendedores</Link>
              </li>
            </ul>
            <Link to="../pages/RegistroVenta">
              <button className="nav-item btn btn-success">Nueva venta</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
