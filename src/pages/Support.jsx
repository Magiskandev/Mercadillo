import { Component } from 'react';
import SupportAccordion from '../components/support/SupportAccordion';
import NavPrincipal from '../components/base/NavPrincipal'
import Footer from '../components/base/Footer';

export default class Support extends Component {
    render() {
        return (
            <section className="global-section-home">
                <NavPrincipal />
                <SupportAccordion />
                <Footer />
            </section>
        )
    }
}