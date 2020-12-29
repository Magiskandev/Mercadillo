import { Component } from 'react';
import CardProducts from '../components/home/CardProducts'
import CarouselApp from '../components/home/CarouselApp';
import SearchBar from '../components/home/SearchBar';

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