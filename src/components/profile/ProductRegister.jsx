import React from 'react';
import {Component } from 'react';
import {DropdownButton, Dropdown, Button, Form,  FormControl} from "react-bootstrap";
import '../../styles/home/styleProducts.css'

export default class ProductForm extends Component{
    constructor(){
        super()
        this.state = {
            value: 0,
            products: []
          };
        this.choices = this.choices.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }


    choices(e){
        document.getElementById('category').value = e.target.value;
    }
    addProduct(e){
        let data = {
            product: 'Doraemon',
            place: 'Mordecai',
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
        .then((response)=> response.json())
        .then((data)=>{
            alert(`Se añade el producto ${data.product} con id: ${data.id} `)
            this.loadProductsData()
        })
    }

    loadProductsData=()=>{
        fetch('https://pruebafiltro.tiagobg.repl.co/products')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            this.setState({
                products: data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.loadProductsData()
    }
    
    render(){
        const handleChange = (e) => {
            this.setState({ value: e.target.value }, () => {
              document.getElementById("slider").value = this.state.value;
            });
          };
        return(
            <section >
                <article className='col-4 card p-3 ml-2 mt-5'>
                    <div className='row'>
                        <button className='col mx-3'>EDIT</button>
                        <button className='col mx-3'>DELETE</button>
                    </div><br/>

                    <div  className='mx-2 col mt-5 mb-3'>
                        <label htmlFor="cantidad" className='mr-2'>Unidades Disponibles </label><input name='cantidad' type="number" className='col-5'/>
                    </div>
                    
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
                
                <div className="d-column">
                    <div className='d-flex'>
                        <DropdownButton id="dropdown-item-button" title="Categoría" className='my-4'>
                            <Dropdown.ItemText>Elige la categoría de tu producto:</Dropdown.ItemText>
                            <Dropdown.Item as="button" value='Visual' onClick={this.choices}>Visual</Dropdown.Item>
                            <Dropdown.Item as="button" value='Audio' onClick={this.choices}>Audio</Dropdown.Item>
                            <Dropdown.Item as="button" value='Physics' onClick={this.choices}>Physics</Dropdown.Item>
                            <Dropdown.Item as="button" value='Other' onClick={this.choices}>Other</Dropdown.Item>
                        </DropdownButton>
                        <input type="dropdown" name='category' id='category' className='ml-2 mt-4 col-5' disabled style={{height: '35px' , color: 'black'}}/><br/>
                    </div>
                    <div className='d-flex'>

                        <DropdownButton id="dropdown-item-button" title="Subcategoría" className='my-4'>
                            <Dropdown.ItemText>Elige la subcategoría de tu producto:</Dropdown.ItemText>
                            <Dropdown.Item as="button" value='Visual' onClick={this.choices}>Visual</Dropdown.Item>
                            <Dropdown.Item as="button" value='Audio' onClick={this.choices}>Audio</Dropdown.Item>
                            <Dropdown.Item as="button" value='Physics' onClick={this.choices}>Physics</Dropdown.Item>
                            <Dropdown.Item as="button" value='Other' onClick={this.choices}>Other</Dropdown.Item>
                        </DropdownButton>
                        <input type="dropdown" name='subcategory' id='subcategory' className='ml-2 mt-4 col-5' disabled style={{height: '35px' , color: 'black'}}/><br/>
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="category" className='mr-2'>Ingresa el precio: </label>
                    <input type="number" name='price' className='col-5'/><br/>
                </div>
                
                <div className='row my-3 mx-auto'>
                    <p className='mx-2'>Agregar descuento</p>
                    <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider round"></span>
                    </label>
                    <Form className='my-3 mx-auto'>
                        <Form.Group controlId="formBasicRangeCustom">                       
                            <Form.Label>Define el descuento % (si aplica)</Form.Label>
                            <Form.Control type="range" max="100" value={this.state.value} onChange={handleChange} step="1" custom />
                            <input type="text" id="slider" min="0" max="100" className='col-3' disabled style={{color: 'black'}}/>
                        </Form.Group>
                    </Form>
                    
                </div>                   

                <label htmlFor="description">Agrega la descripción del producto:</label><textarea name='description' type="text"/>
                </article>
                <Button className='m-3'>Nuevo producto</Button>
                <Button className='m-3' onClick={this.addProduct}>Enviar</Button>

                <div>
                    <table>
                        <thead>
                            <th>
                                <td>Name</td>
                                <td>Place</td>
                                <td>Price</td>
                                <td>Category</td>
                            </th>
                        </thead>
                        <tbody>                                
                            {this.state.products.map((item, i)=> {
                                return <tr key={i}>
                                    <td>{item.product}</td>
                                    <td>{item.place}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                </tr>
                            })}                                
                        </tbody>
                    </table>
                </div>

            </section>
        )
    }
}