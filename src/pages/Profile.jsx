import React, { Component } from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import ProfileNav from '../components/profile/ProfileNav';
import PersonalInfo from '../components/profile/PersonalInfo';
import ProductRegister from '../components/profile/ProductRegister';
import NavPrincipal from '../components/base/NavPrincipal';
import BannerProfile from '../images/jpg/banner-inscripción.jpg'
import AvatarProfile from '../images/jpg/Avatar-profile.jpg'
import Footer from '../components/base/Footer'


export default class Profile extends Component {

    render() {
        return (
            <section className="global-section-home">
                <NavPrincipal />
                <img src={BannerProfile} className="banner-section-profile" alt="banner de la sección perfil de usuario" />
                <button className="position-absolute btn-products-and-services">Ofrecer productos o servicios</button>
                <div className="d-flex content-avatar-and-rol">
                    <div className="d-flex content-avatar-profile position-relative justify-content-center mr-3">
                        <img src={AvatarProfile} alt="" className=" avatar-user-profile" />
                        <button className="btn-change-avatar-profile position-absolute">Editar</button>
                    </div>
                    <h2 className="title-rol-profile-user">Cliente</h2>
                </div>
                <div className=''>
                    <PersonalInfo />
                    <ProductRegister />
                </div>
                <Footer />
            </section>
        )
    }
}