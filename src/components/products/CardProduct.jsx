import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import productsTwo from './data/accessProduct'


function CardProduct({ products, loading }) {
  /* const [accessProduct, setProductOne] = useState([])
  const [products, setProductTwo] = useState(product) */

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {products.map((product, productsTwo) => (

        <Card
          className="mt-5 card-product border-0">
          {/* //////////////////////Header Card////////////////////// */}
          <div className="d-flex mt-1 card-content-btns position-absolute">
            <i
              className={`${product.likeIcon} card-style-icon-like d-flex
          justify-content-center align-items-center`}>
            </i>
          </div>
          {/* //////////////////////Header Card////////////////////// */}


          {/* //////////////////////body Card////////////////////// */}
          <section className="d-flex flex-column">
            <Card.Img variant="top" src={product.image} className="card-image" />

            <div className="d-flex flex-row px-2 align-items-center card-header">
              <span className="d-flex justify-content-center 
                    align-items-center card-header-span">
                <i className={`${product.companyLogo} card-company-logo`}></i>
              </span>
              <h3 className="card-company-name pl-2">{product.companyName}</h3>
            </div>


            <div className="d-flex justify-content-center">
              <Button variant="primary" className="card-btn-add"
                style={{ background: product.backgroundButton }}>
                {product.txtBtn}</Button>
            </div>

            {/* //////////////////////Body////////////////////// */}

            {/* //////////////////////Footer////////////////////// */}
            <div className="d-flex justify-content-between px-1 global-content-footer-card-product
            align-items-end">
              <Card.Title className="card-title-footer">
                {product.title}</Card.Title>
              <Card.Title className="card-title-two-footer pl-2">
                {product.price}</Card.Title>
            </div>

            <div className="justify-content-center position-absolute
    align-items-center card-content-footer"
              style={{ background: product.backgroundFooter }}>
            </div>
            {/* //////////////////////Footer////////////////////// */}
          </section>
        </Card>
      ))}
    </>
  )
}

export default CardProduct