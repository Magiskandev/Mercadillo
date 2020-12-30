import { Component } from 'react';
import ProductRegister from '../components/profile/ProductRegister';
import PersonalInfo from '../components/profile/PersonalInfo';

export default class Profile extends Component {
    render() {
        return (
            <section className="global-section-home">
                <div className='ml-5'>
                    <PersonalInfo/>
                    <ProductRegister />                    
                </div>
            </section>
        )
    }
}