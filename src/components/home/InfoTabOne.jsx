import React from 'react'
import Vineta from '../../images/svg/viñeta.svg'

function InfoTabOne() {
    return (
        <>
            <section className="d-flex flex-column align-items-center">
                <img src={Vineta} alt="" className="position-absolute vineta-tab-style" />
                <div className="d-flex">
                    <article className="article-tab-one-home-one">
                        <p className="subtitle-tab-info-one-home mb-4">Página con herramientas para facilitar la accesibilidad </p>
                        <p className="paragraph-tab-info-one-home">Estamos trabajando fuertemente para optimizar la experiencia de usuario enfocado hacia las personas con algún tipo de discapacidad</p>
                    </article>
                    <article className="article-tab-one-home-two">
                        <p className="subtitle-tab-info-two-home mb-4">Productos para personas con discapacidad en un solo lugar</p>
                        <p className="paragraph-tab-info-two-home">Tenesmos una sección exclusiva para que las personas con algún tipo de discapacidad, puedan conseguir facilmente sus productos.</p>
                    </article>
                </div>

                <button className="btn-tab-one-home mt-5">Ir a la sección de productos para discapacitados</button>
            </section>
        </>
    )
}

export default InfoTabOne
