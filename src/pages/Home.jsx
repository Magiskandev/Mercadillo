import React from 'react'
import HomeInfo from '../components/products/HomeInfo'
import NavTop from '../components/products/NavTop'


function Home() {
  return (
    <section className="global-section-home">
      <NavTop />
      <HomeInfo />
    </section>
  );
}

export default Home;
