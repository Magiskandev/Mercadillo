import React from 'react'
import UserCalification from '../../images/svg/user-calification.svg'
import Calification from '../../images/svg/Calification.svg'
import Vineta from '../../images/svg/viñeta.svg'

function InfoiTabThree() {
    return (
        <section>
            <img src={Vineta} alt="" className="position-absolute vineta-tab-three-style" />
            <h2 className="title-style-tab-info-three mt-4 pl-4 position-absolute">
                Sistema de calificación, para siempre recomendarte lo mejor</h2>
            <div className="d-flex justify-content-between content-icons-tab-three px-4
            align-items-center">
                <img src={UserCalification} alt="" className="mt-5" />
                <img src={Calification} alt="" className="" />
            </div>
        </section>
    )
}

export default InfoiTabThree
