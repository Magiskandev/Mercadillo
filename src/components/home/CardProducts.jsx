import React from 'react'
import Product from '../CardProduct'
import ProductsData from '../../ProductsData'

const CardProducts = () => {
    return (
        <>
        <section className="container-fluid d-flex justify-content-center
        flex-column align-items-center">
            <article className="d-flex mb-5">
            <Product {...ProductsData[0]}/>
            <Product {...ProductsData[1]}/>
            <Product {...ProductsData[2]}/>
            <Product {...ProductsData[3]}/>
            </article>

            <article className="d-flex mb-5">
            <Product {...ProductsData[4]}/>
            <Product {...ProductsData[5]}/>
            <Product
            {...ProductsData[6]}
            />
            <Product
            {...ProductsData[7]}
            />
            </article>
            </section>
    </>
    )}

export default CardProducts
