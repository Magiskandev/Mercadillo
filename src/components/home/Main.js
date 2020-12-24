import React from 'react';
import {Router, Switch, BrowserRouter, NavLink, Route, HashRouter} from 'react-router-dom';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Productos from '../../pages/Productos';
import Soporte from '../../pages/Soporte';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(){
    return(        
        <HashRouter>        
                <section className='app'>
                    <ul className='navbar'>
                        <li className='item'><img src='https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-market-stall-with-red-and-white-awning-icon-circle-png-image_2044273.jpg' style={{width: '50px' }}/></li>
                        <NavLink exact to='/'><li className='item'>Home</li></NavLink>
                        <NavLink to='/perfil'><li className='item'>Perfil</li></NavLink>
                        <NavLink to='/productos'><li className='item'>Productos</li></NavLink>
                        <NavLink to='/soporte'><li className='item'>Soporte</li></NavLink>
                    </ul>

                    <div className='content'>
                        <Route exact path='/' component={Home}/>
                        <Route path='/perfil' component={Perfil}/>
                        <Route path='/productos' component={Productos}/>
                        <Route path='/soporte' component={Soporte}/>
                    </div>                
                </section>        
        </HashRouter>
        
    )
}  