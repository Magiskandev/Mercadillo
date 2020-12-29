import { Component } from 'react';
import ProductRegister from '../components/profile/ProductRegister'

export default class Profile extends Component {
    render() {
        return (
            <section className="global-section-home">
                <div className='ml-5'>
                    <ProductRegister />
                </div>
            </section>
        )
    }
}