import React,  { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class PersonalInfo extends Component{    

    checkDisabled=()=>{
        //se declaran las variables de los campos de registro de usuario
        //se puede implementar un forEach ACA
        let emailInput = document.getElementById('user-email');
        let rolInput = document.getElementById('rol-input');
        let nameInput = document.getElementById('user-name');
        let lastnameInput = document.getElementById('user-lastname');
        let birthDateInput = document.getElementById('user-birthdate');
        
       if(emailInput.hasAttribute('disabled') && rolInput.hasAttribute('disabled') && nameInput.hasAttribute('disabled') && lastnameInput.hasAttribute('disabled') && birthDateInput.hasAttribute('disabled')){
           emailInput.removeAttribute('disabled');
           rolInput.removeAttribute('disabled');
           nameInput.removeAttribute('disabled');
           lastnameInput.removeAttribute('disabled');
           birthDateInput.removeAttribute('disabled');

       }else{
           emailInput.setAttribute('disabled',"");
           rolInput.setAttribute('disabled',"");
           nameInput.setAttribute('disabled',"");
           lastnameInput.setAttribute('disabled', "");
           birthDateInput.setAttribute('disabled', "");
       }  
    }

    changePassword = ()=>{
        let passwordInput = document.getElementById('user-password')
        let passwordConfirmation = document.getElementById('confirm-password')

        if(passwordInput.hasAttribute('disabled') && passwordConfirmation.hasAttribute('disabled')){
            passwordInput.removeAttribute('disabled');
            passwordConfirmation.removeAttribute('disabled');
        }else{
            passwordInput.setAttribute('disabled',"");
            passwordConfirmation.setAttribute('disabled',"");
        }
    }

    render(){
        return(
            <section className='container-fluid'>
                <div className='row col-4 my-3 mt-5'>
                        <button className='col-4 mr-5 btn btn-primary' onClick={this.checkDisabled}>EDIT</button>
                        <button className='col-4 ml-5 btn btn-danger'>DELETE</button>
                    </div><br/>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <div className='row my-3'>
                            <div className='col-5 mr-2'>
                                <Form.Label>Ingresa tus nombres:</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" id='user-name' disabled/>
                            </div>
                            <div className="col-5 ml-2">
                                <Form.Label>Ingresa tus apellidos:</Form.Label>
                                <Form.Control type="text" placeholder="Apellido" id='user-lastname' disabled/>
                            </div>                            
                        </div>
                        <div className='row col-9 my-3'>
                            <Form.Label>Ingresa tu email:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" id='user-email' disabled/>
                        </div>
                        <div className='row my-3'>
                            <div className="col-4">
                                <Form.Label>Ingresa tu contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="**********" id='user-password' disabled/>
                            </div>
                            <div className="col-4">
                                <Form.Label>Confirma tu contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="**********" id='confirm-password' disabled/>
                            </div>
                            <button className='col-2 mx-auto mt-4 btn btn-warning' onClick={this.changePassword}>Cambiar contraseña</button>             
                        </div>                        
                        <div className='row my-3'>                            
                            <div className="col-5">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Selecciona tu rol dentro de la plataforma:</Form.Label>
                                    <Form.Control as="select" id='rol-input' disabled>
                                        <option>Anunciante</option>
                                        <option>Solicitante</option>
                                        <option>Ambos</option>                       
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-5">
                                <Form.Label>Ingresa tu fecha de nacimiento:</Form.Label>
                                <Form.Control type="date" id='user-birthdate' disabled/>
                            </div>                    
                        </div>               
                    </Form.Group>
                                       
                </Form>               
                     
            </section>
        )
    }
}