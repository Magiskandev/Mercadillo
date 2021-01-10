import React from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Products from '../../pages/Products';
import Support from '../../pages/Support';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
    return (
        <HashRouter>
            <section className='app'>
                <ul className='navbar p-0 mt-0 d-flex flex-column flex-reverse position-fixed nav-style
                justify-content-center position-relative'>
                    <li className='item d-flex align-items-center nav-user-avatar position-relative'><div className='user-avatar mr-3'></div> Hola!, Nombre de usuario</li>
                    <div className='line-section position-relative'></div>
                    <div className='line-section-two position-relative'></div>
                    <div className='align-items-center'>
                        <NavLink exact to='/' className='text-decoration-none section-one position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-home mr-3 icon-list-nav"></i><li className='item nav-section'>Home</li>
                            </div>
                        </NavLink>

                        <NavLink to='/productos' className='text-decoration-none section-two position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-shopping-cart mr-3 icon-list-nav ">
                                </i><li className='item nav-section'>Productos</li>
                            </div>
                        </NavLink>

                        <NavLink to='/perfil' className='text-decoration-none section-three position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-user mr-3 icon-list-nav"></i><li className='item nav-section'>Perfil</li>
                            </div>
                        </NavLink>

                        <NavLink to='/soporte' className='text-decoration-none section-four position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-question-circle mr-3 icon-list-nav"></i><li className='item nav-section'>Soporte</li>
                            </div>
                        </NavLink>

                        <NavLink to='/soporte' className='text-decoration-none section-five position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-sign-out-alt mr-3 icon-list-nav"></i><li className='item nav-section'>Cerrar sesión</li>
                            </div>
                        </NavLink>
                    </div>
                </ul>
                <div className='content'>
                    <Route exact path='/' component={Home} />
                    <Route path='/perfil' component={Profile} />
                    <Route path='/productos' component={Products} />
                    <Route path='/soporte' component={Support} />
                </div>
            </section>
        </HashRouter>
    )
}  