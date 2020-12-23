import React from 'react';
import { Router, Switch, BrowserRouter, NavLink, Route, HashRouter } from 'react-router-dom';
import CardProducts from './CardProducts';
import CarouselApp from './CarouselApp';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Productos from '../../pages/Productos';
import Soporte from '../../pages/Soporte';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/Header';


export default function Main() {
    return (
        <Header/>
    )
}  