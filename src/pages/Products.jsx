import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import FilterProducts from '../components/products/FilterProducts';
import CardInfoSection from '../components/products/CardInfoSection';
import NavPrincipal from '../components/base/NavPrincipal';

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <NavPrincipal />
                <CarouselApp />
                <div className="d-flex justify-content-between">
                    <FilterProducts />
                    <CardInfoSection />
                </div>

                <CardProducts />
            </section>
        )
    }
}