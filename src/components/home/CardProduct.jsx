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
          className="mt-5 card-product">
          {/* //////////////////////Header Card////////////////////// */}
          <div
            className="d-flex flex-row
                  position-absolute
                  justify-content-between
                  px-3
                  align-items-center
                  justify-content-center card-header">
            <span
              className="d-flex
                    justify-content-center
                    align-items-center card-header-span">
              <i className={`${product.companyLogo} card-company-logo`}></i>
            </span>
            <h3 className="card-company-name">{product.companyName}</h3>
          </div>
          <div className="card-color-head"></div>
          {/* //////////////////////Header Card////////////////////// */}


          {/* //////////////////////body Card////////////////////// */}
          <section className="d-flex "
            style={{ background: product.backgroundBody }}>
            <Card.Img variant="top" src={product.image} className="card-image" />

            <div>
              <div
                className="position-absolute pr-2 d-flex justify-content-end
    align-items-center card-content-icon">
                <i className={`${product.tagIcon} card-icon-tag`}></i>
              </div>
              <div className="position-absolute d-flex justify-content-center
    align-items-center card-content-category">
                <i className={`${product.section} card-color-icon-category`}></i>
              </div>
            </div>


            <section className="d-flex flex-column">
              <Card.Body className="card-body-content">
                <Card.Text className="card-body-text">
                  {product.descriptionProduct}
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center align-items-center
    justify-content-between card-content-btns">
                <i
                  className={`${product.likeIcon} card-style-icon-like d-flex
          justify-content-center align-items-center`}>
                </i>
                <Button variant="primary" className="card-btn-add"
                  style={{ background: product.backgroundButton }}>
                  {product.txtBtn}</Button>
              </div>
            </section>
            {/* //////////////////////Body////////////////////// */}

            {/* //////////////////////Footer////////////////////// */}
            <div className="justify-content-center position-absolute d-flex
  justify-content-between px-3 align-items-center card-content-footer"
              style={{ background: product.backgroundFooter }}>
              <Card.Title className="card-title-footer">
                {product.title}</Card.Title>
              <Card.Title className="card-title-two-footer">
                {product.price}</Card.Title>
            </div>
            {/* //////////////////////Footer////////////////////// */}
          </section>
        </Card>
      ))}
    </>
  )
}

export default CardProduct
