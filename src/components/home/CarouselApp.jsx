import React from "react";
import { Carousel, Card, CardDeck, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CarouselApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: [{}],
      title: ''
    }
  }

  loadPromotions=()=>{
    fetch('https://pruebafiltro.tiagobg.repl.co/products')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        this.setState({
            products: data.sort(function(a, b){
              return b.discount - a.discount;
          }),
          title: 'Promociones'
        });
        console.table(this.state.products)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  loadPopulars=()=>{
    fetch('https://pruebafiltro.tiagobg.repl.co/products')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        this.setState({
            products: data.sort(function(a, b){
              return b.timeSearched - a.timeSearched;
          }),
          title: 'Los más buscados'
        });
        console.table(this.state.products)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  render() {
    return (
      <section className='container-fluid my-4'>
        <button className='btn btn-warning mx-2' onClick={this.loadPromotions}>Promociones</button>
        <button className='btn btn-warning mx-2' onClick={this.loadPopulars}>Los más buscados</button>
        <h2 className='my-3'>{this.state.title}</h2>
        <Carousel>
           <Carousel.Item>
                <CardDeck>
                  {this.state.products.slice(0,6).map((item, i) =>{
                    return<Card key={i}>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        {item.description}
                        </Card.Text>
                      </Card.Body>
                      <Button variant="primary">Buy</Button>
                      <Card.Footer>
                        <small className="text-muted">{item.company}</small>
                      </Card.Footer>
                    </Card>    
                  })}
                </CardDeck> 
              </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}