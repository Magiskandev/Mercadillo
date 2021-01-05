import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown, Button, Form, FormControl } from "react-bootstrap";


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickBuscar = this.clickBuscar.bind(this);
  }
  clickBuscar(e) {
    document.getElementById('buscar').value = e.target.value;
  }
  clickOpcionar() {
    console.log('')
  }
  render() {
    return (
      <section className="d-flex my-5 mx-auto">
        <p htmlFor="buscar" className="mt-2 mr-2 col-2">
          Ingresa tu busqueda:
        </p>
        <div className="col-8">
          <Form inline>
            <FormControl
              id="buscar"
              type="text"
              placeholder="Ingresa tu busqueda"
              className=" mr-sm-2 col-8 rounded-pill"
            />
          </Form>
          <Button className="col-2" type="button" onClick={this.clickBuscar}>
            Buscar
          </Button>
          <div className="my-3">
            <Button className="mx-2 btn btn-info rounded-pill" value='Opcion A' onClick={this.clickBuscar}>Opcion A</Button>
            <Button className="mx-2 btn btn-info rounded-pill" value='Opcion B' onClick={this.clickBuscar}>Opcion B</Button>
            <Button className="mx-2 btn btn-info rounded-pill" value='Opcion C' onClick={this.clickBuscar}>Opcion C</Button>
            <Button className="mx-2 btn btn-info rounded-pill" value='Opcion D' onClick={this.clickBuscar}>Opcion D</Button>
          </div>
        </div>
        <div className="col-1 p-0">
          <DropdownButton id="dropdown-item-button" title="Filtrar">
            <Dropdown.ItemText>Escoja una opcion:</Dropdown.ItemText>
            <Dropdown.Item as="button">Precio: De menor a mayor</Dropdown.Item>
            <Dropdown.Item as="button">Precio: De mayor a menor</Dropdown.Item>
            <Dropdown.Item as="button">Ordenar: A-Z</Dropdown.Item>
            <Dropdown.Item as="button">Ordenar: Z-A</Dropdown.Item>
          </DropdownButton>
        </div>
      </section>
    );
  }
}
