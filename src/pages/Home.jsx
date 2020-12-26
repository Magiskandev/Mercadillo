import React from 'react'
import CardProducts from '../components/home/CardProducts'
import CarouselApp from '../components/home/CarouselApp';
import SearchBar from '../components/home/SearchBar';

function Home() {
  return (
    <section className="global-section-home">
      <CarouselApp />
      <SearchBar />
      <CardProducts />
    </section>
  );
}

export default Home;
