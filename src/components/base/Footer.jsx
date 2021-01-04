import React from 'react'
import IconCompanySmall from '../../images/svg/Icon-company-small.svg'
import Twitter from '../../images/png/Twitter.png'
import Facebook from '../../images/png/Facebook.png'

function Footer() {
    return (
        <footer className="content-footer-global d-flex">
            <div className="content-first-part-footer d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={IconCompanySmall} alt="" />
                    <p className="paragraph-footer-company-icon ml-3">La tienda de todos</p>
                </div>
                <div>
                    <p className="paragraph-subs-footer mb-1">Suscríbete a nuestro newsletter</p>
                    <p className="paragraph-novelties-footer mb-3">Recibe todas las novedades y todas las ofertas que tenemos para ti.</p>
                    <div>
                        <input className="newsletter-input-footer px-3" type="email" placeholder="example@hotmail.com" />
                        <button className="btn-subs-footer">Suscribirse</button>
                    </div>
                </div>
                <div className="d-flex content-global-contact">
                    <h2 className="title-footer-contact">Contactanos</h2>
                    <div className="separator-contact mx-3"></div>
                    <div className="flex-column">
                        <div className="mb-2">
                            <a href="!#">
                                <img className="mr-3" src={Facebook} alt="Icono Facebook" />
                            </a>
                            <a href="!#">
                                <img src={Twitter} alt="Icono Twitter" />
                            </a>
                        </div>
                        <p className="paragraph-email-contact-footer">jumblie@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
