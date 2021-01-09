import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from 'axios'
import md5 from 'md5'
import Sa2 from 'sweetalert2'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const baseUrl = 'http://localhost:3000/users'

class MainFormularioRegistro extends Component {
    constructor(props) {
        super(props);
        this.state = {

            form: {
                usertype: '',
                email: '',
                name: '',
                lastname: '',
                date: '',
                username: '',
                password: '',
                checkpassword: ''
            }
        };
        this.inputChange = this.inputChange.bind(this);
        this.userRegister = this.userRegister.bind(this);
    }

    inputChange(e) {
        //console.log(e)

        const target = e.target;
        const value = target.type === 'password' ? md5(target.value) : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            }
        });

        console.log(this.state.form)
    }

    userRegister(e) {
        e.preventDefault();
        console.log(e);
        const { usertype, email, name, lastname, date, username, password, checkpassword } = this.state.form;

        if (usertype !== '' && email !== '' && name !== '' && lastname !== '' && date !== '' && username !== '' && password !== '' && checkpassword !== '') {
            if (this.passwordValidate(checkpassword) && password !== '' && checkpassword !== '') {
                axios
                    .get(baseUrl, { params: { email: email } })
                    .then(response => {
                        console.log(response, response.data)
                        return response.data;
                    })
                    .then(response => {
                        if (response.length > 0) {
                            Sa2.fire(
                                'Ya existe una cuenta con ese correo electrónico',
                                'Intente con uno diferente o ingrese con sus credenciales',
                                'error'
                            )
                        }

                        else {
                            const data = { usertype: usertype, email: email, name: name, lastname: lastname, date: date, username: username, password: password }
                            axios
                                .post(baseUrl, data)
                                .then((response) => {
                                    if (response.status == 201) {
                                        Sa2.fire(
                                            `!Te has registrado correctamente!`,
                                            'Ingresa usando los datos registrados',
                                            'success'
                                        )
                                        window.location = '/login';
                                    }

                                    else {
                                        Sa2.fire(
                                            'Lo sentimos, tu registro no fue posible',
                                            'Inténtalo de nuevo',
                                            'error'
                                        )

                                    }
                                });
                        }
                    });
            }

            else {
                Sa2.fire(
                    'Los campos de contraseña no coinciden o están vacíos',
                    'Revisalos e intenta de nuevo',
                    'warning'
                )
            }
        }

        else {
            Sa2.fire(
                'Los campos no deben estar vacíos',
                'Ingresa tus datos completos',
                'warning'
            )
        }
    }

    passwordValidate = (pass) => {
        const { password } = this.state.form;
        return password === pass;
    }

    render() {

        return (
            <>
                <Container className='col-sm-4 mt-3'>
                    <Card className='text-center'>
                        <Card.Header>
                            <Card.Title>Registro de usuario</Card.Title>
                            <Card.Subtitle>Anunciáte fácil y rápido</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.userRegister}>
                                <Form.Group controlId="formBasicUserType">
                                    <Form.Label>Rol de usuario</Form.Label>
                                    <Form.Control as="select" custom name='usertype' value={this.state.form.usertype} onChange={this.inputChange}>
                                        <option value=''>Seleccionar</option>
                                        <option value='anunciante'>Anunciante</option>
                                        <option value='solicitante'>Solicitante</option>
                                        <option value='ambos'>Ambos</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" name='name' placeholder="Nombres" value={this.state.form.firstname} onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Control type="text" name='lastname' placeholder="Apellidos" value={this.state.form.lastname} onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicDate">
                                    <Form.Label size='lg'>Fecha de nacimiento:</Form.Label>
                                    <Form.Control type="date" name='date' value={this.state.form.date} onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicUser">
                                    <Form.Control type="text" name='username' placeholder="Usuario" value={this.state.form.username} onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name='email' placeholder="Correo electrónico" value={this.state.form.email} onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" name='password' placeholder="Contraseña" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckPassword">
                                    <Form.Control type="password" name='checkpassword' placeholder="Comprobar contraseña" onChange={this.inputChange} />
                                </Form.Group>

                                <Form.Text className="text-muted">
                                    No compartas tus datos con nadie
                    </Form.Text>
                                <Button className='mt-3' variant="primary" type="submit" block><strong>REGISTRARSE</strong></Button>
                            </Form>
                            <Card.Title className='m-3'>¿Ya estás registrado?</Card.Title>
                            <Link to='/login'>
                                <Button variant="success" type="button" block><strong>INGRESAR</strong></Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}

export default MainFormularioRegistro;
