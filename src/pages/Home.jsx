import React from 'react'
import HomeInfoMaster from '../components/products/HomeInfoMaster'
import NavTop from '../components/products/NavTop'


function Home() {
  return (
    <section className="global-section-home">
      <NavTop />
      <HomeInfoMaster />
    </section>
  );
}

export default Home;
