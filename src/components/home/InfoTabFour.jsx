import React from 'react'
import SmallBusiness from '../../images/svg/small-business.svg'
import BigBusiness from '../../images/svg/big-business.svg'
import Vineta from '../../images/svg/viñeta.svg'

function InfoTabFour() {
    return (
        <section className="d-flex content-tab-four-info-home justify-content-between px-4
        align-items-center">
            <img src={Vineta} alt="" className="position-absolute vineta-tab-four-style" />
            <p className="paragraph-tab-four-style">Entre nuestros objetivos priorizamos el apoyo a los pequeños negocios emergentes</p>
            <img src={SmallBusiness} alt="" />
            <img src={BigBusiness} alt="" />
        </section>
    )
}

export default InfoTabFour
