import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistroVenta from "./pages/RegistroVenta";
import ListadoVentas from "./pages/ListadoVentas";
import GestionVendedores from "./pages/GestionVendedores";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/pages/" exact component={Inicio} />
            <Route path="/pages/ListadoVentas" component={ListadoVentas} />
            <Route
              path="/pages/GestionVendedores"
              component={GestionVendedores}
            />
            <Route path="/pages/RegistroVenta" component={RegistroVenta} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
