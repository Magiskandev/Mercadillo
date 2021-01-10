import React from 'react'
import Star from '../../images/png/Star.png'

function BuyProduct() {
    return (
        <section className="content-window-buy-product">
            <div className="d-flex flex-column align-items-center">
                <div className="justify-content-center d-flex align-items-center mt-3">
                    <div className="avatar-company-buy mr-5"></div>
                    <div>
                        <p className="title-buy-company mb-2">Nombre de la empresa</p>
                        <button className="btn-visit-company">Visitar</button>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                    <h3 className="title-buy-product mr-3">Detalles</h3>
                    <div className="line-separator-buy-product"></div>
                </div>
                <div>
                    <h3 className="subtitle-buy-company mt-4 mb-2">Video del producto</h3>
                    <iframe width="320" height="170" src="https://www.youtube.com/embed/fjKHId8G47Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="d-flex justify-content-between mt-4">
                        <h3 className="subtitle-buy-company">Descripción </h3>
                        <div className="d-flex">
                            <img src={Star} alt="" className="mr-2 star-icon-calification-buy" />
                            <p>4.5</p>
                        </div>
                    </div>
                    <p className="paragraph-buy-company mt-2">Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation
veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="d-flex align-items-center mt-4 mb-4">
                    <h3 className="title-buy-product mr-3">Contacto</h3>
                    <div className="line-separator-buy-product"></div>
                </div>
                <textarea name="" id="" cols="30" rows="10" className="textarea-buy-company"></textarea>
                <div className="d-flex justify-content-end content-btn-send-buy-company mt-2">
                    <button className="btn-send-buy-company">Enviar</button>
                </div>
                <div className="d-flex align-items-center mt-4 mb-4 flex-column">
                    <div className="d-flex align-items-center">
                        <h3 className="title-buy-product mr-3">Detalles de la compra</h3>
                        <div className="line-separator-buy-product-two"></div>
                    </div>
                    <div className="d-flex justify-content-between content-units-products mt-3">
                        <h3 className="subtitle-buy-company">Unidades</h3>
                        <input type="number" name="" id="" className="units-products-input" />
                    </div>
                </div>
                <div className="d-flex justify-content-between content-buy-total-product">
                    <div>
                        <h3 className="subtitle-buy-company">Total</h3>
                        <p className="title-buy-product">4.900$</p>
                    </div>
                    <button className="btn-buy-product">Comprar</button>
                </div>
            </div>
        </section>
    )
}

export default BuyProduct
