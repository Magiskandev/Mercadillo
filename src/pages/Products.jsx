import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import SearchBar from '../components/products/SearchBar';

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <CarouselApp />
                <SearchBar />
                <CardProducts />
            </section>
        )
    }
}