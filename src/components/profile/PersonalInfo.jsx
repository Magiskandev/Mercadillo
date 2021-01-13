import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import AddMethod from '../../images/svg/add.svg'

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props)

        this.addUser = this.addUser.bind(this);
    }
    checkDisabled = () => {
        //se declaran las variables de los campos de registro de usuario
        //se puede implementar un forEach ACA
        let emailInput = document.getElementById('user-email');
        let nameInput = document.getElementById('user-name');
        let lastnameInput = document.getElementById('user-lastname');
        let birthDateInput = document.getElementById('user-birthdate');
        let addressInput = document.getElementById('user-address');
        let blockedInput = document.getElementById('user-blocked');
        let aptoInput = document.getElementById('user-apto');

        let formInputs = [emailInput, nameInput, lastnameInput, birthDateInput, addressInput, blockedInput, aptoInput]

        formInputs.forEach(item => {
            if (item.hasAttribute('disabled')) {
                item.removeAttribute('disabled');
            } else {
                item.setAttribute('disabled', "");
            }
        });
    }
    loadUsersData = () => {
        fetch('https://pruebafiltro.tiagobg.repl.co/users')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    products: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    addUser(e) {
        let emailInput = document.getElementById('user-email');
        let nameInput = document.getElementById('user-name');
        let lastnameInput = document.getElementById('user-lastname');
        let birthDateInput = document.getElementById('user-birthdate');
        let addressInput = document.getElementById('user-address');
        let blockedInput = document.getElementById('user-blocked');
        let aptoInput = document.getElementById('user-apto');
        let passwordInput = document.getElementById('user-password');



        if (emailInput.value === '' || nameInput.value === '' || lastnameInput.value === '' || birthDateInput.value === '' || addressInput.value === '' || blockedInput.value === '' || aptoInput.value === '' || passwordInput.value === '' || emailInput.disabled) {
            alert("Por favor ingresa los datos requeridos")
        } else {

            let data = {
                name: nameInput.value.trim(),
                lastname: lastnameInput.value.trim(),
                bithdate: birthDateInput.value.trim(),
                email: emailInput.value.trim(),
                address: addressInput.value.trim(),
                block: blockedInput.value.trim(),
                apto: aptoInput.value.trim(),
                password: passwordInput.value.trim()

            }
            fetch('https://pruebafiltro.tiagobg.repl.co/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(`Se añade el usuario ${data.name} con id: ${data.id} `)
                    this.loadUsersData()
                    this.checkDisabled()
                })
            console.log(data.name);
        }
    }

    changePassword = () => {
        let passwordInput = document.getElementById('user-password')
        let passwordConfirmation = document.getElementById('confirm-password')
        let passwordsFields = [passwordInput, passwordConfirmation]

        passwordsFields.forEach(item => {
            if (item.hasAttribute('disabled')) {
                item.removeAttribute('disabled');
            } else {
                item.setAttribute('disabled', "");
            }
        });
    }

    clearFields = () => {
        let emailInput = document.getElementById('user-email');
        let nameInput = document.getElementById('user-name');
        let lastnameInput = document.getElementById('user-lastname');
        let birthDateInput = document.getElementById('user-birthdate');
        let addressInput = document.getElementById('user-address');
        let blockedInput = document.getElementById('user-blocked');
        let aptoInput = document.getElementById('user-apto');
        let passwordInput = document.getElementById('user-password');

        let formInputs = [emailInput, nameInput, lastnameInput, birthDateInput, passwordInput, addressInput, blockedInput, aptoInput]

        for (const input of formInputs) {
            input.value = ''
        }

        alert('Los campos serán eliminados');
    }

    render() {
        return (
            <section className='section-personal-info'>
                <div className='mb-4 d-flex justify-content-between'>
                    <div>
                        <button className='btn btn-edit-information-personal' onClick={this.checkDisabled}>Editar</button>
                        <button className=' ml-5 btn btn-delete-information-personal' onClick={this.clearFields}>Limpiar</button>
                    </div>
                    <div>
                        <button className='btn btn-save-information-personal' onClick={this.addUser}>Guardar</button>
                    </div>
                </div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1" className="d-flex justify-content-between">
                        <div>
                            <div className='d-flex mb-5'>
                                <div className='mr-4'>
                                    <Form.Label className="title-input-profile-name">*Nombre</Form.Label>
                                    <Form.Control className="input-profile-name" type="text" placeholder="Nombre" id='user-name' disabled />
                                </div>
                                <div>
                                    <Form.Label className="title-input-profile-lastname">*Apellido</Form.Label>
                                    <Form.Control className="input-profile-lastname" type="text" placeholder="Apellido" id='user-lastname' disabled />
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <div className="mr-4">
                                    <Form.Label className="title-input-profile-email">*Email</Form.Label>
                                    <Form.Control className="input-profile-email" type="email" placeholder="name@example.com" id='user-email' disabled />
                                </div>
                                <div className="">
                                    <Form.Label className="title-input-profile-born">*Fecha de nacimiento</Form.Label>
                                    <Form.Control className="input-profile-born" type="date" id='user-birthdate' disabled />
                                </div>
                            </div>
                            <div className='d-flex flex-column content-inputs-profile-password'>
                                <div className="d-flex">
                                    <div className="mr-4">
                                        <Form.Label className="title-input-profile-pass">Contraseña anterior</Form.Label>
                                        <Form.Control className="input-profile-pass" type="password" placeholder="**********" id='user-password' disabled />
                                    </div>
                                    <div className="">
                                        <Form.Label className="title-input-profile-confirmpass">Nueva contraseña</Form.Label>
                                        <Form.Control className="input-profile-confirmpass" type="password" placeholder="**********" id='confirm-password' disabled />
                                    </div>
                                </div>
                                <button className='mt-4 btn btn-warning btn-profile-change-pass' onClick={this.changePassword}>Cambiar contraseña</button>
                            </div>
                        </div>
                        <div className="separator-profile-data-basic"></div>
                        <div>
                            <div>
                                <div className="">
                                    <Form.Label className="title-input-profile-direction">Dirección</Form.Label>
                                    <Form.Control className="input-profile-direction" type="text" placeholder="Dirección" id='user-address' disabled />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-5">
                                <div className="">
                                    <Form.Label className="title-input-profile-blocked">Bloque</Form.Label>
                                    <Form.Control className="input-profile-blocked" type="text" placeholder="Bloque" id='user-blocked' disabled />
                                </div>
                                <div className="">
                                    <Form.Label className="title-input-profile-apto">Apto</Form.Label>
                                    <Form.Control className="input-profile-apto" type="text" placeholder="Apto" id='user-apto' disabled />
                                </div>
                            </div>
                            <h2 className="title-input-profile-apto mt-5">Localización</h2>
                            <iframe className="map-location-user" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31728.77347424565!2d-75.56871797952202!3d6.250989951760809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1610219482202!5m2!1ses!2sco" width="492" height="173" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Form.Group>
                </Form>
                <div className="mt-5">
                    <h2 className="title-profile-pay mb-2">Métodos de pago</h2>
                    <div className="content-seprator-profile-pay mb-4"></div>
                </div>

                <button className="d-flex btn-add-method-pay flex-column justify-content-center align-items-center">
                    <svg className="icon-method-pay mb-2" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M90.4923 42.1604C90.4923 40.3131 88.9947 38.8156 87.1474 38.8156H56.375C54.5277 38.8156 53.0302 37.318 53.0302 35.4707V4.69834C53.0302 2.85105 51.5327 1.35352 49.6854 1.35352H42.1038C40.2565 1.35352 38.7589 2.85105 38.7589 4.69834V35.4707C38.7589 37.318 37.2614 38.8156 35.4141 38.8156H4.6417C2.79441 38.8156 1.29688 40.3131 1.29688 42.1604V49.742C1.29688 51.5893 2.7944 53.0868 4.6417 53.0868H35.4141C37.2614 53.0868 38.7589 54.5844 38.7589 56.4317V87.2041C38.7589 89.0514 40.2565 90.5489 42.1038 90.5489H49.6854C51.5327 90.5489 53.0302 89.0514 53.0302 87.2041V56.4317C53.0302 54.5844 54.5277 53.0868 56.375 53.0868H87.1474C88.9947 53.0868 90.4923 51.5893 90.4923 49.742V42.1604Z"
                            stroke-width="2.22988" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                Agregar
                </button>

            </section>
        )
    }
}