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
                email: '',
                firstname: '',
                lastname: '',
                username: '',
                password: ''
            }
        };
        this.inputChange = this.inputChange.bind(this);
        this.userRegister = this.userRegister.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    inputChange(e) {
        console.log(e)

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

    async passwordChange(e) {
        await this.setState({
            form: {

            }
        });
        console.log(this.state.form)
    }

    async userRegister(e) {
        e.preventDefault();

        axios
            .post(baseUrl, { ...this.state.form })
            .then((response) => {
                if (response.status == 201) {
                    Sa2.fire(
                        `!Te has registrado correctamente!`,
                        'Ingresa',
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

    render() {
        return (
            <>
                <Container className='col-4 mt-3'>
                    <Card className='text-center'>
                        <Card.Header>
                            <Card.Title>Registro</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.userRegister}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name='firstname' placeholder="Tu nombre" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" name='lastname' placeholder="Tu apellido" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicUser">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="Tu usuario" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Tu correo electrónico" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Tu contraseña" onChange={this.inputChange} />
                                </Form.Group>
                                {/*<Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordar" onChange={this.changeInput} />
                    </Form.Group>*/}
                                <Form.Text className="text-muted">
                                    No comparta sus datos con nadie.
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
