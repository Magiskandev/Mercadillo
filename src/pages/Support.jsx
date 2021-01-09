import {Component} from 'react';
import SupportAccordion from '../components/support/SupportAccordion';

export default class Support extends Component{
    render(){
        return(
            <section className="global-section-home">
                <div style={{backgroundColor: '#ffeaa7', textAlign: 'center'}}>
                    <h1>Soporte</h1>                    
                </div>
                <SupportAccordion/>
            </section>
        )
    }
}