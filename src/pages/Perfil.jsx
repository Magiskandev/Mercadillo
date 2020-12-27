import {Component} from 'react';
import ProductRegister from '../components/perfil/ProductRegister'

export default class Perfil extends Component{
    render(){
        return(
            <section className="global-section-home">
                <div className='ml-5'>
                    <ProductRegister/>
                </div>
            </section>
        )
    }
}