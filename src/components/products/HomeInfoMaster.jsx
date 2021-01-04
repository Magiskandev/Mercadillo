import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';

import InfoTabOne from './InfoTabOne'
import InfoTabTwo from './InfoTabTwo'
import InfoTabThree from './InfoTabThree'
import InfoTabFour from './InfoTabFour'
import IconTabOne from '../../images/svg/icon-tab-info-home-one.svg'
import IconTabTwo from '../../images/svg/icon-tab-info-home-two.svg'
import IconTabThree from '../../images/svg/icon-tab-info-home-three.svg'
import IconTabFour from '../../images/svg/icon-tab-info-home-four.svg'
import ShoperMan from '../../images/svg/Shoper man.svg'
import Testimonials from './Testimonials'
import PhotoOne from '../../images/png/photo-1.png'
import PhotoTwo from '../../images/png/photo-2.png'
import PhotoThree from '../../images/png/photo-3.png'
import Footer from '../base/Footer'

function HomeInfoMaster() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <section className="content-section-body-info-home d-flex justify-content-end 
    position-relative">

        <img src={ShoperMan} alt="" className="mr-5 shoperman-style" />
        <div className="content-global-info-tab">
          <Nav tabs>
            <NavItem>

              <p
                className="tab-info-home-style-one justify-content-center d-flex align-items-center
              px-4 flex-column"
                onClick={() => { toggle('1'); }}
              >
                <img src={IconTabOne} alt="" className="pb-5" />
              Generamos valor a las personas con discapacitadas
          </p>
            </NavItem>
            <NavItem>
              <p
                className="tab-info-home-style-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                onClick={() => { toggle('2'); }}
              >
                <img src={IconTabTwo} alt="" className="pb-5" />
              Encuentra lo que necesitas,
              contamos con una gran variedad de productos
          </p>
            </NavItem>
            <NavItem>
              <p
                className="tab-info-home-style-three justify-content-center d-flex align-items-center
              px-4 flex-column"
                onClick={() => { toggle('3'); }}
              >
                <img src={IconTabThree} alt="" className="pb-5" />
              Productos de calidad, nos aseguramos de que te lleves lo mejor
          </p>
            </NavItem>
            <NavItem>
              <p
                className="tab-info-home-style-four justify-content-center d-flex align-items-center
              px-4 flex-column"
                onClick={() => { toggle('4'); }}
              >
                <img src={IconTabFour} alt="" className="pb-5" />
              Le damos la oporunidad a pequeños negocios a salir adelante.
          </p>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="d-flex tab-content-style align-items-center
        justify-content-center">
            <TabPane tabId="1">
              <section className="d-flex">
                <InfoTabOne />
              </section>
            </TabPane >
            <TabPane tabId="2">
              <InfoTabTwo />

            </TabPane>
            <TabPane tabId="3">
              <InfoTabThree />
            </TabPane>
            <TabPane tabId="4">
              <InfoTabFour />
            </TabPane>
          </TabContent >
        </div >
      </section >

      <section className="content-testimonials d-flex justify-content-between">
        <Testimonials
          ParagraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, pretium vulputate dis egestas orci lectus auctor."
          ParagraphTwo="enim justo, sollicitudin odio nec bibendum massa venenatis."
          AvatarTestimonial={PhotoOne}
          NameTestimonial="Sergio de Paula"
          PositionTestimonial="CEO en Explandy" />
        <Testimonials
          ParagraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, pretium vulputate dis egestas orci lectus auctor."
          ParagraphTwo="enim justo, sollicitudin odio nec bibendum massa venenatis."
          AvatarTestimonial={PhotoTwo}
          NameTestimonial="Carla Maya"
          PositionTestimonial="Cliente frecuente" />
        <Testimonials
          ParagraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, pretium vulputate dis egestas orci lectus auctor."
          ParagraphTwo="enim justo, sollicitudin odio nec bibendum massa venenatis."
          AvatarTestimonial={PhotoThree}
          NameTestimonial="Camilo Restrepo"
          PositionTestimonial="CTO en Vines" />
      </section>
      <Footer />

    </>
  )
}

export default HomeInfoMaster
