import React from 'react'
import LogoCompany from '../../images/svg/Logo Empresa.svg'
import SearchPrincipal from '../base/SearchPrincipal'
import MenuAccesibility from '../base/MenuAccesibility'

function NavTop() {
    return (

        <section className="content-section-nav">
            <div className="content-margin-nav">
                <div className="d-flex position-relative justify-content-center justify-content-between">
                    <h1 className="txt-principal-home-nav mt-3">Una plataforma accesible para todos,
consigue todo lo que necesitas en un solo lugar.</h1>


                    <MenuAccesibility />
                </div>

                <div className="d-flex position-relative justify-content-between content-search-and-btn-nav">
                    <div className="d-flex position-relative company-logo-style">
                        <img src={LogoCompany} alt="Logo de la empresa" />
                    </div>
                    <div className="d-flex align-items-center content-margin-bottom position-relative">
                        <SearchPrincipal WidthSearch='745px' />

                        <button className="btn-principal-nav-buy">Ir de compras</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavTop
