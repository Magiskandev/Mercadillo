import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import FilterTabOne from './FilterTabOne'

function FilterProducts() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="content-global-filter-tab">
            <Nav tabs>
                <NavItem>
                    <p
                        className="tab-filter-products-one justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('1'); }}
                    ><i class="fas fa-universal-access mb-4 icon-tab-filter-products-one"></i>Accesibilidad</p>
                </NavItem>
                <NavItem>
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('2'); }}
                    ><i class="fas fa-utensils mb-4 icon-tab-filter-products-two"></i>Restaurantes</p>
                </NavItem>
                <NavItem>
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('3'); }}
                    ><i class="fas fa-shopping-basket mb-4 icon-tab-filter-products-three"></i>Pequeños negocios</p>
                </NavItem>
                <NavItem>
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('4'); }}
                    ><i class="fas fa-cubes mb-4 icon-tab-filter-products-four"></i>Miscelánea</p>
                </NavItem>
                <NavItem>
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('5'); }}
                    ><i class="fas fa-id-card-alt mb-4 icon-tab-filter-products-five"></i>Servicios</p>
                </NavItem>
                <NavItem>
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('6'); }}
                    ><i class="fas fa-store mb-4 icon-tab-filter-products-six"></i>Negocios</p>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="d-flex tab-content-filter-style align-items-center
        justify-content-center">
                <TabPane tabId="1">
                    <section className="d-flex">
                        <FilterTabOne />
                    </section>
                </TabPane >
                <TabPane tabId="2">
                    {/* <InfoTabTwo /> */}

                </TabPane>
                <TabPane tabId="3">
                    {/* <InfoTabThree /> */}
                </TabPane>
                <TabPane tabId="4">
                    {/* <InfoTabFour /> */}
                </TabPane>
            </TabContent >
        </div >
    )
}

export default FilterProducts
