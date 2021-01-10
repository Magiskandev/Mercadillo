import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import Button from 'react-bootstrap/Button'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Home extends Component {

  logOut = () => {
    cookies.remove('id', { path: "/" });
    cookies.remove('firstname', { path: "/" });
    cookies.remove('lastname', { path: "/" });
    cookies.remove('email', { path: "/" });
    cookies.remove('username', { path: "/" });
    cookies.remove('usertype', { path: "/" });
    window.location.href = './';
  }

  componentDidMount() {
    if (!cookies.get('username')) {
      window.location.href = "./";
    }
  }

  render() {
    console.log(`id: ${cookies.get('id')}`);
    console.log(`nombre(s): ${cookies.get('name')}`);
    console.log(`apellido(s): ${cookies.get('lastname')}`);
    console.log(`email: ${cookies.get('email')}`);
    console.log(`username: ${cookies.get('username')}`);
    console.log(`usertype: ${cookies.get('usertype')}`);

    return (

      <>
        <Header />
        <div>
          <h2>HOLA DESDE HOME</h2>
          <br />
          <Button variant="primary" type="button" onClick={this.logOut}><strong>CERRAR SESIÓN</strong></Button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home
