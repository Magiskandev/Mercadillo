import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'
import Sa2 from 'sweetalert2'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

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
                    console.log(response)
                    const respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('name', respuesta.name, { path: "/" });
                    cookies.set('lastname', respuesta.lastname, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    cookies.set('email', respuesta.email, { path: "/" });
                    cookies.set('usertype', respuesta.usertype, { path: "/" });
                    window.location.href = "./test";
                    Sa2.fire(
                        `!Bienvenido, ${respuesta.name} ${respuesta.lastname}!`,
                        'Inténtelo de nuevo',
                        'error'
                    )

                } else {
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

            console.log(`id: ${cookies.get('id')}`);
            console.log(`nombre(s): ${cookies.get('name')}`);
            console.log(`apellido(s): ${cookies.get('lastname')}`);
            console.log(`email: ${cookies.get('email')}`);
            console.log(`username: ${cookies.get('username')}`);
            console.log(`usertype: ${cookies.get('usertype')}`);

            window.location.href = "./test";
        }
    }

    responseFacebook = (response) => {
        //console.log(response);

        cookies.set('name', response.name, { path: "/" });
        cookies.set('email', response.email, { path: "/" });
        window.location.href = "./test";
        Sa2.fire(
            `Lo sentimos, el inicio con Google falló`,
            'Inténtelo de nuevo',
            'error'
        )

    }

    responseGoogle = (response) => {
        //console.log(response);
        //console.log(response.profileObj);

        cookies.set('name', response.name, { path: "/" });
        //cookies.set('familyName', response.familyName, { path: "/" });
        //cookies.set('givenName', response.givenName, { path: "/" });
        cookies.set('email', response.email, { path: "/" });
        window.location.href = "./test";
        Sa2.fire(
            `Lo sentimos, el inicio con Google falló`,
            'Inténtelo de nuevo',
            'error'
        )
    }

    failGoogle = (response) => {

        //console.log(response);
        Sa2.fire(
            `Lo sentimos, el inicio con Google falló`,
            'Inténtelo de nuevo',
            'error'
        )
    }

    render() {
        return (
            <>
                <Container className='col-4 mt-3'>
                    <Card className='text-center'>
                        <Card.Header>
                            <Card.Title>Inicio de sesión</Card.Title>
                            <Card.Subtitle>Ingresa a Jumblie</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.logIn}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Ingresa tu correo electrónico" onChange={this.inputChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Ingresa tu contraseña" onChange={this.inputChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit" block><strong>INICIAR SESIÓN</strong></Button>
                            </Form>
                            <Link to='/'>
                            <Form.Text>
                                ¿Olvidaste tu contraseña?
                            </Form.Text>
                            </Link>
                            {/*
                            <Container className='text-center mt-3 mb-3'>
                                <FacebookLogin
                                    appId="687517995464374"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    onClick={this.componentClicked}
                                    callback={this.responseFacebook}
                                    textButton='INICIAR SESIÓN CON FACEBOOK'
                                    icon='fa-facebook'

                                />
                            </Container>
                            <Container className='text-center mt-3 mb-3'>
                                <GoogleLogin
                                    clientId="382835461614-sb4cip47jkm1njn39e17hni4d7km4qgq.apps.googleusercontent.com"
                                    buttonText="INICIAR SESIÓN CON GOOGLE"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.failGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Container>
                            */}
                            <Card.Title className='mt-4'>¿No estás registrado?</Card.Title>
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
