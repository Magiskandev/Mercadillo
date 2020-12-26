import React from 'react'
import CardProducts from '../components/home/CardProducts'
import CarouselApp from '../components/home/CarouselApp';
import ProductRegister from '../components/home/ProductRegister';
import SearchBar from '../components/home/SearchBar';

function Home() {
  return (
    <section className="global-section-home">
      <CarouselApp />
      <SearchBar />
      <CardProducts />
      <ProductRegister />
    </section>
  );
}

export default Home;
