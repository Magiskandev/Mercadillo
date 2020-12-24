import React from 'react';
import {Component } from 'react';
import {DropdownButton, Dropdown, Button, Form,  FormControl} from "react-bootstrap";

export default class ProductForm extends Component{
    constructor(){
        super()

        this.choices = this.choices.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }


    choices(e){
        document.getElementById('category').value = e.target.value;
    }
    addProduct(e){
        let data = {
            product: 'Doraemon',
            place: 'Mordekai',
            category: 'Physics',
            price: '$49.50'
        }
        fetch('https://pruebafiltro.tiagobg.repl.co/products', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    render(){
        return(
            <section >
                <article className='col-4 card p-3 ml-2 mt-5'>
                <Form>
                    <Form.File 
                        id="imagen"
                        label="Agregar fotos"
                        custom
                    />
                </Form><br/>

                <label htmlFor="product">Ingresa el nombre de tu producto: </label>
                <input type="text" name='product'/><br/>
                <label htmlFor="category">Ingresa el nombre de la compañía: </label>
                <input type="dropdown" name='category'/><br/>
                <label htmlFor="category">Ingresa el precio: </label>
                <input type="dropdown" name='price' className='col-5'/><br/>

                <div className="d-flex">
                    <DropdownButton id="dropdown-item-button" title="Categoría" className='my-4'>
                        <Dropdown.ItemText>Elige la categoría de tu producto:</Dropdown.ItemText>
                        <Dropdown.Item as="button" value='Visual' onClick={this.choices}>Visual</Dropdown.Item>
                        <Dropdown.Item as="button" value='Audio' onClick={this.choices}>Audio</Dropdown.Item>
                        <Dropdown.Item as="button" value='Physics' onClick={this.choices}>Physics</Dropdown.Item>
                        <Dropdown.Item as="button" value='Other' onClick={this.choices}>Other</Dropdown.Item>
                    </DropdownButton>
                    <input type="dropdown" name='price' id='category' className='ml-2 mt-4' style={{height: '35px'}}/><br/>
                </div>
                <Form>
                    <Form.Group controlId="formBasicRangeCustom">
                        <Form.Label>Define el descuento (si aplica)</Form.Label>
                        <Form.Control type="range" min={0} max={100} custom />
                    </Form.Group>
                </Form>
                </article>
                <Button className='m-3'>Nuevo producto</Button>
                <Button className='m-3' onClick={this.addProduct}>Enviar</Button>

            </section>
        )
    }
}