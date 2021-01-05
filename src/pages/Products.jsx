import { Component } from 'react';
import CardProducts from '../components/home/CardProducts'
import CarouselApp from '../components/home/CarouselApp';
import SearchBar from '../components/products/SearchBar';

export default class Products extends Component {
    render() {
        return (
            <section className="global-section-home">
                <div style={{backgroundColor: '#ffeaa7', textAlign: 'center'}}>
                    <h1>Productos</h1>
                </div>  
                <CarouselApp/>
                <SearchBar />
                <CardProducts />
            </section>
        )
    }
}