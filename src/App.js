import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id_Usuario: 1, Nombre_Usuario: "Mario Muchacho", Rol_Usuario: "Vendedor Master", Estado_Usuario: "Autorizado" },
  { id_Usuario: 2, Nombre_Usuario: "Yeison Fernando Diaz", Rol_Usuario: "Vendedor Nivel_1" , Estado_Usuario: "No Autorizado"},
  { id_Usuario: 3, Nombre_Usuario: "Yonier Andres Nañez", Rol_Usuario: "Vendedor Junior" , Estado_Usuario: "Pendiente"},
  { id_Usuario: 4, Nombre_Usuario: "Nelson Jimenez", Rol_Usuario: "Administrador" , Estado_Usuario: "Autorizado"},
  { id_Usuario: 5, Nombre_Usuario: "Edward Elric", Rol_Usuario: "Vendedor Jr" , Estado_Usuario: "Pendiente"},
  { id_Usuario: 6, Nombre_Usuario: "Juan Ramirez", Rol_Usuario: "Vendedor Nivel 1" , Estado_Usuario: "Autorizado"},
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id_Usuario: "",
      Nombre_Usuario: "",
      Rol_Usuario: "",
      Estado_Usuario: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id_Usuario == registro.id_Usuario) {
        arreglo[contador].Nombre_Usuario = dato.Nombre_Usuario;
        arreglo[contador].Rol_Usuario = dato.Rol_Usuario;
        arreglo[contador].Estado_Usuario = dato.Estado_Usuario;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el Usuario "+dato.id_Usuario);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id_Usuario == registro.id_Usuario) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id_Usuario=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
      <body>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Usuario APLICATIVO VENTAS</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>id_Usuario</th>
                <th>Nombre_Usuario</th>
                <th>Rol_Usuario</th>
                <th>Estado_Usuario</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id_Usuario}>
                  <td>{dato.id_Usuario}</td>
                  <td>{dato.Nombre_Usuario}</td>
                  <td>{dato.Rol_Usuario}</td>
                  <td>{dato.Estado_Usuario}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar_Datos_Usuario
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar_Usuario</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               id_Usuario:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id_Usuario}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre_Usuario: 
              </label>
              <input
                className="form-control"
                name="Nombre_Usuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombre_Usuario}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Rol_Usuario: 
              </label>
              <input
                className="form-control"
                name="Rol_Usuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Rol_Usuario}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado_Usuario: 
              </label>
              <input
                className="form-control"
                name="Estado_Usuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado_Usuario}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Nombre_Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                id_Usuario: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre_Usuario: 
              </label>
              <input
                className="form-control"
                name="Nombre_Usuario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Rol_Usuario: 
              </label>
              <input
                className="form-control"
                name="Rol_Usuario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado_Usuario: 
              </label>
              <input
                className="form-control"
                name="Estado_Usuario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>


          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </body>
      </>
    );
  }
}
export default App;
