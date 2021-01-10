import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainLogin from '../components/MainLogin'

class Login extends Component {
  render() {
    return (
      <>
        <Header/>
        <MainLogin/>
        <Footer/>        
      </>
    );
  }
}

export default Login
