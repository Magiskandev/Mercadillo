import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import FilterTabOne from './FilterTabOne';
import AccesSound from './../../audio/accesibilidad.mp4';
import useSound from 'use-sound';
import { UseProducts } from '../../reducers/index'

function FilterProducts({ setCategory }) {
    const [play6] = useSound(AccesSound);
    const [activeTab, setActiveTab] = useState('1');

    const [products, setProducts] = useState([]);
    const renderCategory = e => {

        console.log("heyyy", e.target.innerText);
        const searchedCategory = e.target.innerText.toLowerCase().trim();
        fetch("https://pruebafiltro.tiagobg.repl.co/products")
            .then((resp) => resp.json())
            .then((data) => {
                const products = data;
                products.map((item, i) => {
                    if (item.category.toLowerCase().trim() === searchedCategory) {
                        setCategory(item.category)
                        return setProducts({ products: item });
                    }
                });
            });
    };

    console.log(products);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="content-global-filter-tab">
            <Nav tabs>
                <NavItem onClick={renderCategory}>
                    <p
                        className="tab-filter-products-one justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('1'); }}
                        value="Accesibilidad"><i class="fas fa-universal-access icon-tab-filter-products-one  mb-4">
                        </i>Accesibilidad</p>
                </NavItem>
                <NavItem onClick={renderCategory} value="Restaurantes">
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('2'); }}
                    ><i class="fas fa-utensils mb-4 icon-tab-filter-products-two"></i>Restaurantes</p>
                </NavItem>
                <NavItem onClick={renderCategory} value="Pequeños negocios">
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('3'); }}
                    ><i class="fas fa-shopping-basket mb-4 icon-tab-filter-products-three"></i>Pequeños negocios</p>
                </NavItem>
                <NavItem onClick={renderCategory} value="Miscelánea">
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('4'); }}
                    ><i class="fas fa-cubes mb-4 icon-tab-filter-products-four"></i>Miscelánea</p>
                </NavItem>
                <NavItem onClick={renderCategory} value="Servicios">
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('5'); }}
                    ><i class="fas fa-id-card-alt mb-4 icon-tab-filter-products-five"></i>Servicios</p>
                </NavItem>
                {/* <NavItem onClick={renderCategory} value="Negocios">
                    <p
                        className="tab-filter-products-two justify-content-center d-flex align-items-center
              px-4 flex-column"
                        onClick={() => { toggle('6'); }}
                    ><i class="fas fa-store mb-4 icon-tab-filter-products-six"></i>Negocios</p>
                </NavItem> */}
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
                    <section className="d-flex">
                        <FilterTabOne />
                    </section>
                </TabPane>
                <TabPane tabId="3">
                    {/* <InfoTabThree /> */}
                    <section className="d-flex">
                        <FilterTabOne />
                    </section>
                </TabPane>
                <TabPane tabId="4">
                    {/* <InfoTabFour /> */}
                    <section className="d-flex">
                        <FilterTabOne />
                    </section>
                </TabPane>
                <TabPane tabId="5">
                    {/* <InfoTabFour /> */}
                    <section className="d-flex">
                        <FilterTabOne />
                    </section>
                </TabPane>
            </TabContent >
        </div >
    )
}

export default FilterProducts