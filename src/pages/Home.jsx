import React from 'react'
import HomeInfoMaster from '../components/home/HomeInfoMaster'
import NavTop from '../components/home/NavTop'


function Home() {
  return (
    <section className="global-section-home">
      <NavTop />
      <HomeInfoMaster />
    </section>
  );
}

export default Home;
