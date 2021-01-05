import React from 'react'
import SubcategoryComponent from './SubcategoryComponent'
import Vineta from '../../images/svg/viñeta.svg'

function InfoTabTwo() {
    return (
        <section>
            <img src={Vineta} alt="" className="position-absolute vineta-tab-two-style" />
            <section className="d-flex">
                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Ecólogico" url="" />
                </div>

                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Recados" url="" />
                </div>
                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Cárnicos" url="" />
                </div>

                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Decoración" url="" />
                </div>
                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Salud y belleza" url="" />
                </div>
                <div className="content-subcategories-line-one">
                    <SubcategoryComponent subcategory="Comida Rapida" url="" />
                </div>
                <div className="">
                    <SubcategoryComponent subcategory="Gourmet" url="" />
                </div>
            </section>

            <section className="d-flex">
                <div className="content-subcategories-line-two">
                    <SubcategoryComponent subcategory="Accesorios" url="" />
                </div>
                <div className="subcategories-line-two-other-style">
                    <SubcategoryComponent subcategory="Fruver" url="" />
                </div>
                <div className="subcategories-line-two-other-style">
                    <SubcategoryComponent subcategory="Accesible" url="" />
                </div>
                <div className="subcategories-line-two-other-style">
                    <SubcategoryComponent subcategory="Automotores" url="" />
                </div>
                <div className="subcategories-line-two-other-style">
                    <SubcategoryComponent subcategory="Mantenimiento" url="" />
                </div>
                <div className="subcategories-line-two-other-style">
                    <SubcategoryComponent subcategory="Movilidad" url="" />
                </div>
            </section>

            <section className="d-flex">
                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Abarrotes" url="" />
                </div>

                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Estanquillo" url="" />
                </div>
                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Entretenimiento" url="" />
                </div>

                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Utilidades" url="" />
                </div>
                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Restaurantes" url="" />
                </div>
                <div className="content-subcategories-line-three">
                    <SubcategoryComponent subcategory="Helados" url="" />
                </div>
                <div className="subcategories-line-three-other-style">
                    <SubcategoryComponent subcategory="Charcutería" url="" />
                </div>
            </section>
        </section>
    )
}

export default InfoTabTwo
