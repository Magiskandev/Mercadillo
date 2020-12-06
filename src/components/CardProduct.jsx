import React from 'react';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function CardProduct (props){


    return (
        <>
      {/*   {ProductsData.map(props => {
        return ( */}
        <Card style={{ width: '337px', height: '185px', marginLeft: '24px'}} 
        className="d-flex flex-column mt-5">
            <div className="">
{/* //////////////////////Header Card////////////////////// */}
                  <div
                  className="d-flex flex-row
                  position-absolute
                  justify-content-between
                  px-3
                  align-items-center
                  justify-content-center"
                  style={{
                    width: '337px',
                    height: '50px'}}>
                      <span
                  style={{
                    width: '35px',
                    height: '35px',
                    background: '#C1C1C1',
                    borderRadius: '50%',
                    }}
                    className="d-flex
                    justify-content-center
                    align-items-center">
                <i className={props.companyLogo}
                style={{
                  color: '#343232',
                  fontSize: '20px'
                  }}>
                </i>
                  </span>
                  <h3 style={{
                    fontFamily: 'Lato, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#EEECED',
                    }}>{props.companyName}</h3>
                  </div>
             
            <div
            style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                width: '337px',
                height: '50px',
                background: '#343232' }}
                >
            </div>
{/* //////////////////////Header Card////////////////////// */}

{/* //////////////////////body Card////////////////////// */}

{/* //////////////////////Image////////////////////// */}
            </div>
            <section className="d-flex "
            style={{background: props.backgroundBody}}>
  <Card.Img variant="top" src={props.image}
  style={{ width: '135px', height: '145px',
  borderTopRightRadius:'24px', zIndex: '2'}}/>
  {/* //////////////////////Image////////////////////// */}

{/* //////////////////////Icons////////////////////// */}
  <div>
    <div 
    className="position-absolute pr-2 d-flex justify-content-end
    align-items-center"
    style={{ width: '54px', height: '30px', left: '115px',
  borderBottomRightRadius:'10px', background: '#FFFFFF', top:'50px'}}>
      <i className={props.tagIcon}
      style={{ textAlign: 'right'}}></i>
    </div>
    <div className="position-absolute d-flex justify-content-center
    align-items-center"
    style={{ background: '#9E0059', width: '40px', height: '30px',
    right:0,  borderBottomLeftRadius: '10px'}}>
      <i className={props.section}
      style={{ color: '#EEECED'}}></i>
      </div>
      </div>
{/* //////////////////////Icons////////////////////// */}

{/* //////////////////////Body////////////////////// */}
<section className="d-flex flex-column">
  <Card.Body
  style={{padding: '32px 16px 0', height: '80px'}}>
    <Card.Text style={{ fontSize: '12px', LineHeight: '14px',
  fontWeight: 'normal', fontFamily: 'Roboto, sans-serif'}}>
      {props.descriptionProduct}
    </Card.Text>
    </Card.Body>
    <div className="d-flex justify-content-center align-items-center
    justify-content-between"
    style={{height: '60px', padding: '0 0 0 16px'}}>
            <i style={{ background: '#FFFFFF', height: '40px', width: '40px',
          borderRadius: '50%', verticalAlign: 'middle',
        display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          className={props.likeIcon}>
      </i>
    <Button variant="primary" className=""
    style={{ background: props.backgroundButton, height: '40px', border: 'none',
    width: '125px', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
      {props.txtBtn}</Button>
      </div>
      </section>
  {/* //////////////////////Body////////////////////// */}

  <div className="justify-content-center position-absolute d-flex
  justify-content-between px-3 align-items-center"
  style={{ width: '100%', height: '40px',
  background: props.backgroundFooter, bottom: '-51px', borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px'}}>
  <Card.Title
  style={{ color: '#EEECED',
  fontFamily: 'Roboto, sans-serif',
fontWeight: 'bold',
fontSize: '14px'}}>
    {props.title}</Card.Title>
  <Card.Title
  style={{ color: '#EEECED',
  fontFamily: 'Roboto, sans-serif',
fontWeight: 'bold',
fontSize: '14px'}}>
    {props.price}</Card.Title>

  </div>
  </section>
</Card>
{/* )
})} */}
</>
    )
}

export default CardProduct
