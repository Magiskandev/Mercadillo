import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'
import Sa2 from 'sweetalert2'
import FacebookLogin from 'react-facebook-login'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import AccessButton from '../components/AccessButton'

const baseUrl = 'http://localhost:3000/users'
const cookies = new Cookies();

class MainLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        };
        this.inputChange = this.inputChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    async inputChange(e) {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    async logIn(e) {
        e.preventDefault();

        await axios
            .get(baseUrl, { params: { email: this.state.form.email, password: md5(this.state.form.password) } })
            .then(response => {
                console.log(response, response.data)
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    const respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('firstname', respuesta.firstname, { path: "/" });
                    cookies.set('lastname', respuesta.lastname, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    window.location.href = "./home";
                    Sa2.fire(
                        `¡Bienvenido ${respuesta.firstname} ${respuesta.lastname}!`,
                        'Adelante',
                        'success'
                    )

                } else {
                    //alert('El usuario o la contraseña no son correctos');
                    Sa2.fire(
                        '¡Tu Usuario o Contraseña es incorrecto!',
                        'Inténtalo de nuevo',
                        'error'
                    )
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        if (cookies.get('email')) {
            window.location.href = "./home";
        }
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <>
                <Container className='col-4 mt-3'>
                    <Card className='text-center'>
                        <Card.Header>
                            <Card.Title>Acceso</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.logIn}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Ingrese su correo electrónico" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Ingrese su contraseña" onChange={this.inputChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit" block><strong>INGRESAR</strong></Button>
                            </Form>
                            <Container className='text-center mt-3 mb-3'>
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={this.responseFacebook}
                                callback={this.responseFacebook}
                            />
                            </Container>
                            <Card.Title>¿No estás registrado?</Card.Title>
                            <Link to='/register'>
                            <Button variant="success" type="button" block><strong>¡REGÍSTRATE!</strong></Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}



export default withRouter(MainLogin);
