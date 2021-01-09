import React from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import ProfileNav from '../components/profile/ProfileNav';
import PersonalInfo from '../components/profile/PersonalInfo';
import ProductRegister from '../components/profile/ProductRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


export default function Profile (){
    return(
        <section className="global-section-home">
            {/* <ProfileNav/> */}
            <PersonalInfo/>
            <ProductRegister/>
        </section>
    )
}