import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import FilterProducts from '../components/products/FilterProducts';
import NavPrincipal from '../components/base/NavPrincipal';

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <div style={{ backgroundColor: '#ffeaa7', textAlign: 'center' }}>
                    <h1>Productos</h1>
                </div>
                <CarouselApp />
                <FilterProducts />
                <CardProducts />
            </section>
        )
    }
}