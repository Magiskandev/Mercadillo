import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import SearchBar from '../components/home/SearchBar';
import NavPrincipal from '../components/base/NavPrincipal';

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <NavPrincipal />
                <CarouselApp title={"Promociones"} />
                <CarouselApp title={"Los más buscados"} />
                <SearchBar />
                <CardProducts />
            </section>
        )
    }
}