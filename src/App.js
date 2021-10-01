import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Ventas</a></li>
                            <li><a className="dropdown-item" href="#">Vendedores</a></li>
                            <li><a className="dropdown-item" href="#">Usuarios</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

   <h4 className="display-4">Registro de Ventas</h4>
    <div className="cuerpo container">
        <div className="contenedorizq">
            <p className="lead">
                Todos los campos son obligatorios.
            </p>
            <p className="h3">Vendedor</p>
            <input className="form-control" type="text" placeholder="Nombre Completo / ID de vendedor"
                aria-label="Disabled input example" disabled />
            <p className="h3 espacio">Cliente</p>
            <select className="form-select" aria-label="Vendedor">
                <option selected>Seleccione un cliente</option>
                <option value="1">Mario Muchacho</option>
                <option value="2">Yonier Ñanez</option>
                <option value="3">Nelson Jimenez</option>
                <option value="4">Yeisson Diaz</option>
            </select>
            <button type="button" className="btn btn-success">Registrar cliente nuevo</button>
            <p className="h3 espacio">Productos</p>
            <select className="form-select" aria-label="Producto">
                <option selected>Seleccione un producto</option>
                <option value="1">Resina</option>
                <option value="2">Yeso</option>
                <option value="3">Espátula</option>
                <option value="4">Turbina</option>
                <option value="5">Micromotor</option>
            </select>
        </div>

        <div className="contenedorder">
            <p className="h3">Resumen de venta</p>
            <p className="h5">Marque los productos que desea eliminar del carrito</p>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    #
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">11</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                </ul>
                            </div>
                        </th>
                        <td><label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Micromotor
                            </label></td>
                        <td>200.000,00 cop</td>
                        <td>200.000,00 cop</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    #
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">11</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                </ul>
                            </div>
                        </th>
                        <td><label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Resinas
                            </label></td>
                        <td>55.000,00 cop</td>
                        <td>165.000,00 cop</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    #
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">11</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                </ul>
                            </div>
                        </th>
                        <td><label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Kg. de yeso
                            </label></td>
                        <td>20.000,00 cop</td>
                        <td>100.000,00 cop</td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td></td>
                        <td>Total</td>
                        <td>465.000,00 cop</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-danger">Eliminar</button>
            <button type="button" className="btn btn-success">Confirmar</button>
        </div>
    </div>
    </div>
  );
}

export default App;
