import React from 'react'
import AccesImgInfo from '../../images/png/img-section-one.png'
import SimilarSound from './../../audio/vender-productos-similares.mp4';
import useSound from 'use-sound';

function CardInfoSection() {
    const [play11] = useSound(SimilarSound);

    return (
        <div className="content-card-section-info">
            <div>
                <div className="d-flex content-img-section-info justify-content-center">
                    <img src={AccesImgInfo} alt="" className="" />

                    <h2 className="title-section-card-info position-absolute">Accesibilidad</h2>

                </div>
            </div>
            <div className="content-section-info d-flex flex-column justify-content-center align-items-center">
                <p className="paragraph-card-info-section">Vendemos todo tipo de productos para las
personas con alguna discapacidad.</p>
                <button onClick={play11} className="btn-card-section-info px-3 mt-5">Vender productos similares</button>
            </div>
        </div>
    )
}

export default CardInfoSection
