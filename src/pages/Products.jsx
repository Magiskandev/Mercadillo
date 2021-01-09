import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import FilterProducts from '../components/products/FilterProducts';
import CardInfoSection from '../components/products/CardInfoSection';
import NavPrincipal from '../components/base/NavPrincipal';
import BuyProduct from '../components/products/BuyProduct'
import Footer from '../components/base/Footer'

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <NavPrincipal />
                <div className="mt-4">
                    <CarouselApp/>
                </div>
                <div className="d-flex justify-content-between">
                    <FilterProducts />
                    <CardInfoSection />
                </div>
                <div className="d-flex justify-content-between">
                    <CardProducts />
                    <BuyProduct />
                </div>
                <Footer />
            </section>
        )
    }
}