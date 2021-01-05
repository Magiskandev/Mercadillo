import React from 'react';
import {Component } from 'react';
import {Button, Form} from "react-bootstrap";



export default class ProductForm extends Component{
    
    constructor(){
        super()
        this.state = {
            value: 0,
            products: [{}],
            categories:{
                "Misceláneos": ["Accesorios", "Ecológico", "Decoración", "Utilidades"]
            ,
                "Comidas": ["Comidas Rápidas", "Gourmet", "Restaurantes", "Helados", "Charcutería"]
            ,
                "Servicios": ["Mantenimiento", "Salud y belleza", "Automotores", "Entretenimiento", "Recados"]
            ,
                "Tienda": ["Abarrotes", "Estanquillo", "Fruvers", "Cárnicos"]
            ,
                "Inclusivo": ["Físico", "Audio", "Visual", "Cognitivo", "Quirúrgico"]
            },
            subcategories: []
          };
        this.addProduct = this.addProduct.bind(this);

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

   /*  choices(e){
        document.getElementById('category').value = e.target.value;
    } */
    sortForPrice = ()=>{
        // this.loadProductsData();
        const sortPrice = this.state.products.sort((a,b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;

            return 0;
        });
        console.table(sortPrice);        
    }

    //FALTA REVISAR LA PARTE FINAL DEL CONDICIONAL PARA QUE MUESTRE UNA ÚNICA VEZ UNA ALERTA INDICANDO EL GO!
    avoidRepeated = ()=>{
        const data = this.state.products;
        const productName = document.getElementById('product-name').value;
        const productCompany = document.getElementById('product-company').value;            
        
        for(const item of data){
            (productName === item.name && productCompany === item.company)? alert("Lo siento: El producto fue agregado anteriormente") : (console.log("GO"))           
          
        }
        
    }
    addProduct(e){
        const productName = document.getElementById('product-name');
        const productCompany = document.getElementById('product-company');
        const productCategory = document.getElementById('product-category');
        const productPrice = document.getElementById('product-price');
        const availableUnits = document.getElementById('available-units');
        const setDiscount = document.getElementById('set-discount');
        const productSubcategory = document.getElementById('product-subcategory');
        const productDescription = document.getElementById('product-description');
        const productImages = document.getElementById('product-images');
        
        
        let data = {
            name: productName.value.trim(),
            company: productCompany.value.trim(),
            category: productCategory.value.trim(),
            price: productPrice.value.trim(),
            quantity: availableUnits.value.trim(),
            discount: setDiscount.value.trim(),
            subcategory: productSubcategory.value.trim(),
            description: productDescription.value.trim(),
            image: productImages.value

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
            alert(`Se añade el producto ${data.name} con id: ${data.id} `)
            this.loadProductsData()
            this.editProduct()           
        })
        console.log(data.image);
    }

    editProduct = ()=>{        
        const availableUnits = document.getElementById('available-units');
        const productName = document.getElementById('product-name');
        const productCompany = document.getElementById('product-company');
        const productImages = document.getElementById('product-images');
        const productCategory = document.getElementById('product-category');
        const productSubcategory = document.getElementById('product-subcategory');
        const productPrice = document.getElementById('product-price');
        const addDiscount = document.getElementById('price-switch');
        const productDescription = document.getElementById('product-description');
        
        const productInputs = [availableUnits, productName, productCompany, productImages, productCategory, productSubcategory, productPrice, addDiscount, productDescription]

        productInputs.forEach(element =>{
            if(element.hasAttribute('disabled')){
                element.removeAttribute('disabled');
            }else{
                element.setAttribute('disabled', "");
            }
        });
        
    }
    setDiscountSlider = ()=>{
        const setDiscount = document.getElementById('set-discount');

        if(setDiscount.hasAttribute('disabled')){
            setDiscount.removeAttribute('disabled');
        }else{
            setDiscount.setAttribute('disabled', "");
        }
        // console.log(setDiscount.disabled)
    }
    
    subcategoryChoices=(e)=>{
        const productCategory = document.getElementById('product-category').value;        
        const categories = this.state.categories;

        this.setState({subcategories: categories[productCategory]}, ()=>{
            console.log(this.state.subcategories);
        });        
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
                <article className='col-5 card p-3 ml-2 mt-5'>
                    <div className='row'>
                        <button className='col-3 mx-3 btn btn-primary' onClick={this.editProduct}>EDIT</button>
                        <button className='col-3 mx-3 btn btn-danger'>DELETE</button>
                    </div><br/>
                    <div id='product-card-register'>
                        <div  className='mx-2 col mt-5 mb-3'>
                            <label htmlFor="cantidad" className='mr-2'>Unidades Disponibles </label>
                            <input name='cantidad' type="number" className='col-5' min='0' id='available-units' disabled/>
                        </div>
                        
                        <Form>
                            <Form.Group>
                                <Form.File id='product-images' label="Agrega la imagen de tu producto" disabled />
                            </Form.Group>
                        </Form><br/>                    

                        <label htmlFor="product">Ingresa el nombre de tu producto: </label>
                        <input type="text" name='product' id='product-name' className='col-8' disabled/><br/>
                        <label htmlFor="company">Ingresa el nombre de la compañía: </label>
                        <input type="text" name='company' id='product-company' className='col-8' disabled/><br/>                                   
                    
                        <div className="d-flex my-3 mb-2">
                            <div className='d-flex mr-2'>
                                <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.subcategoryChoices}>
                                    <Form.Label>Selecciona la categoría del producto:</Form.Label>
                                    <Form.Control as="select" id='product-category' disabled>
                                        <option>--Selecciona--</option>
                                        <option>Misceláneos</option>
                                        <option>Comidas</option>
                                        <option>Servicios</option>
                                        <option>Tienda</option> 
                                        <option>Inclusivo</option>                        
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className='d-flex ml-2'>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Selecciona la subcategoría del producto:</Form.Label>
                                    <Form.Control as="select" id='product-subcategory' disabled>
                                        {this.state.subcategories.map((item) =>
                                        <option key={item}>{item}</option>    
                                        )};                                    
                                                             
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="category" className='mr-2'>Ingresa el precio sin puntos ni comas (COP): </label>
                            <input type="number" name='price' className='col-5' min='0' id='product-price' disabled/><br/>
                        </div>
                    
                        <div className='row my-3 mx-auto'>                                                      
                                <Form.Check 
                                    type="switch"
                                    id="price-switch"
                                    label="Agregar descuento" className='my-3' onChange={this.setDiscountSlider}
                                    disabled
                                />                            
                            <Form className='my-3 mx-auto'>
                                <Form.Group controlId="formBasicRangeCustom">                       
                                    <Form.Label>Define el descuento % (si aplica)</Form.Label>
                                    <Form.Control type="range" max="100" value={this.state.value} onChange={handleChange} step="1" id='set-discount' custom disabled/>
                                    <input type="text" id="slider" min="0" max="100" className='col-3' disabled style={{color: 'black'}}/>
                                </Form.Group>
                            </Form>                        
                        </div>
                        <div className="d-column">            
                            <label htmlFor="description">Agrega la descripción del producto:</label>
                            <textarea name='description' id='product-description' className='col' rows='4' type="text" disabled/>
                        </div>
                        <p className='mt-4'><strong>NOTA: Recuerda primero chequear que no se haya ingresado el producto anteriormente dando click al botón "Chequear repetidos"</strong></p>
                    </div>
                </article>

                <Button className='m-3' onClick={this.sortForPrice}>Ordenar por precio</Button>
                <Button className='m-3' onClick={this.avoidRepeated}>Chequear repetidos</Button>
                <Button className='m-3' onClick={this.addProduct}>Enviar</Button>

                <div>
                    <table className='table-striped table-bordered table-hover col-11'>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio (COP)</th>
                                <th scope="col">Cantidad</th>                                
                                <th scope="col">Compañia</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Subcategoría</th>
                                <th scope="col">Descuento</th>
                                <th scope='col'>Precio Final</th>
                                <th scope="col">Descripción</th>  
                                <th scope='col'>Images</th>                              
                            </tr>
                        </thead>
                        <tbody>                                
                            {this.state.products.map((item, i)=> {
                                return <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(item.price)}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.company}</td>                                    
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td>{item.discount}%</td>
                                    <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(item.price -= item.price*(item.discount/100))}</td>
                                    <td>{item.description}</td>
                                    <td>{item.image}</td>

                                </tr>
                            })}                                
                        </tbody>
                    </table>
                </div>

            </section>
        )
    }
}