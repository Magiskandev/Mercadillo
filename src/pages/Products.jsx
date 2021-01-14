import { Component } from 'react';
import CardProducts from '../components/products/CardProducts'
import CarouselApp from '../components/products/CarouselApp';
import FilterProducts from '../components/products/FilterProducts';
import CardInfoSection from '../components/products/CardInfoSection';
import NavPrincipal from '../components/base/NavPrincipal';
import BuyProduct from '../components/products/BuyProduct'
import Footer from '../components/base/Footer'
import { ContextProduct } from '../reducers/index'

export default class Products extends Component {

    state = {
        category: ""
    }

    setCategory = (category) => {
        console.log(category);
        this.setState({ category });
    }

    render() {

        return (
            <section className="global-section-home">
                <ContextProduct>
                    <NavPrincipal />
                    <div className="mt-4">
                        <CarouselApp />
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <FilterProducts setCategory={this.setCategory} />
                        <CardInfoSection />
                    </div>
                    <div className="d-flex justify-content-between">
                        <CardProducts category={this.state.category} />
                        <BuyProduct />
                    </div>
                    <Footer />
                </ ContextProduct>
            </section>
        )
    }
}