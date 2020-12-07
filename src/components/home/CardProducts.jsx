import React from 'react'
import Product from '../CardProduct'
import ProductsData from '../../ProductsData'

const CardProducts = (props) => {
    return (
        <>
        <section 
        style={{width: '1500px'}}
        className="container-fluid d-flex justify-content-center align-items-center
        flex-wrap h-auto">

{ ProductsData.map((props, index) => {
    return (
        <div className="" >
            <div className="">
        <Product 
        {...ProductsData[index]}
        />
        </div>
        </div>
        )})};

            {/* <article className="d-flex mb-5">
            <Product {...ProductsData[0]}/>
            <Product {...ProductsData[1]}/>
            <Product {...ProductsData[2]}/>
            <Product {...ProductsData[3]}/>
            </article>

            <article className="d-flex mb-5">
            <Product {...ProductsData[4]}/>
            <Product {...ProductsData[5]}/>
            <Product {...ProductsData[6]}/>
            <Product {...ProductsData[7]}/>
            </article>  */}
            </section>
    </>
    )}

export default CardProducts
