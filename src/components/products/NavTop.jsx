import React from 'react'
import LogoCompany from '../../images/svg/Logo Empresa.svg'

function NavTop() {
    return (

        <section className="content-section-nav">
            <div className="content-margin-nav">
                <div className="d-flex position-relative justify-content-center justify-content-between">
                    <h1 className="txt-principal-home-nav mt-3">Una plataforma accesible para todos,
consigue todo lo que necesitas en un solo lugar.</h1>
                    <div className="d-flex content-accessibility-nav align-items-center
                justify-content-center position-fixed">
                        <div>
                            <button className="bton-accessibility mr-3">
                                <i class="fas fa-eye icon-nav-accessibility"></i>
                            </button>
                            <button className="bton-accessibility mr-3">
                                <i class="fas fa-plus icon-nav-accessibility"></i>
                            </button>
                            <button className="bton-accessibility mr-3">
                                <i class="fas fa-minus icon-nav-accessibility"></i>
                            </button>
                            <button className="bton-accessibility mr-3">
                                <i class="fas fa-mouse icon-nav-accessibility"></i>
                            </button>
                            <button className="bton-accessibility mr-5">
                                <i class="fas fa-volume-up icon-nav-accessibility"></i>
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                            <h2 className="txt-accessibility mr-3">Accesibilidad</h2>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="d-flex position-relative justify-content-between content-search-and-btn-nav">
                    <div className="d-flex position-relative company-logo-style">
                        <img src={LogoCompany} alt="Logo de la empresa" />
                    </div>
                    <div className="d-flex align-items-center content-margin-bottom position-relative">
                        <div className="d-flex search-products-nav justify-content-center align-items-center px-3">
                            <input className="position-relative input-search-products-nav" type="text" placeholder="¿Que producto buscas?" />

                            <i class="fas fa-search icon-search-principal-nav position-relative"></i>
                        </div>

                        <button className="btn-principal-nav-buy">Ir de compras</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavTop
