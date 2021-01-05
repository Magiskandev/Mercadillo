import React from 'react'
import IconCompanySmall from '../../images/svg/Icon-company-small.svg'
import SearchPrincipal from './SearchPrincipal'
import MenuAccesibility from '../base/MenuAccesibility'

function NavPrincipal() {
    return (
        <header className="nav-principal-content position-fixed">
            <section className="subcontent-nav-principal d-flex align-items-center">

                <img src={IconCompanySmall} alt="Icono pequeño de la empresa Jumblie" className="margin-right-nav-logo" />
                <SearchPrincipal WidthSearch='530px' />
                <MenuAccesibility />

            </section>
        </header>
    )
}

export default NavPrincipal
