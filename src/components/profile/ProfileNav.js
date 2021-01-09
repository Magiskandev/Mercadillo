import React from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import ProductRegister from './ProductRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

export default function ProfileNav (){
    return(
        <section className="global-section-home">
            <HashRouter>
                <section>
                    <div style={{backgroundColor: '#ffeaa7', textAlign: 'center'}}>
                        <h1>Perfil</h1>
                    </div>
                    <ul className="header">
                        <li>
                        <NavLink to="/datos">
                            Mis Datos
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/misProductos">Mis Productos</NavLink>
                        </li>                
                    </ul>
                    <div className='content'>
                        <Route path='/datos' component={PersonalInfo} />
                        <Route path='/misProductos' component={ProductRegister} />                    
                    </div>
                </section>
            </HashRouter>
        </section>
    )
}