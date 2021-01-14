import React from "react";
import { Carousel, Card, CardDeck, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CarouselApp extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      products: [{}],
      title: '',
      productsPerDeck: 3
    }
  }


  loadPromotions = () => {
    fetch('https://pruebafiltro.tiagobg.repl.co/products')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          products: data.sort(function (a, b) {
            return b.discount - a.discount;
          }),
          title: 'Promociones'
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  loadPopulars = () => {
    fetch('https://pruebafiltro.tiagobg.repl.co/products')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          products: data.sort(function (a, b) {
            return b.timeSearched - a.timeSearched;
          }),
          title: 'Los más buscados'
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    // this.loadPromotions();    
    return (
      <section className='content-carrousel-products mt-5'>
        <div className="mt-5">
          <button className='btn btn-warning mr-3 mt-5' onClick={this.loadPromotions}>Promociones</button>
          <button className='btn btn-warning  mt-5' onClick={this.loadPopulars}>Los más buscados</button>
        </div>
        <h2 className='my-3'>{this.state.title}</h2>
        <Carousel className='text-white'>
          {this.state.products.slice(0, 9).map((item, i) => {
            console.log(item, i);
            return <Carousel.Item style={{}}>
              <CardDeck>
                <Card key={i} className='bg-secondary'>
                  <Card.Img variant="top" src={item.image} style={{ width: '200px' }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className='my-3'>
                      {item.description}
                      <p className='font-weight-bold mt-2'>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(item.price -= item.price * (item.discount / 100))}</p>
                      <p className='btn btn-warning' style={{ borderRadius: '50px', fontWeight: 'bolder' }}>{item.discount}% OFF</p>
                    </Card.Text>
                    <div className="d-flex flex-row-reverse mr-0">
                      <Button variant="primary" className='col-2 ml-2 mb-3'>Comprar</Button>
                    </div>
                  </Card.Body>

                  <Card.Footer>
                    <small className="text-muted">{item.company}</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Carousel.Item>
          })}
        </Carousel>
      </section>
    );
  }
}