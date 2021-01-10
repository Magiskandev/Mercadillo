import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainRegister from '../components/MainRegister'

class Register extends Component {
  

  render() {
    return (
      <>
        <Header/>
        <MainRegister/>
        <Footer/>        
      </>
    );
  }
}

export default Register
