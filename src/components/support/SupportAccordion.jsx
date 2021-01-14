import React from 'react';
import '../../styles/support/_support-accordion.scss';

export default class SupportAccordion extends React.Component {
    constructor() {
        super()
    }

    expandOptions = () => {
        const items = document.querySelectorAll('.acordeon .item .header button');

        items.forEach(item => {
            item.addEventListener('click', e => {
                const content = e.target.parentElement.nextElementSibling;
                content.classList.toggle('show');
            });
        });
    }

    render() {
        return (

            <section className='container-fluid my-5 section-page-support'>
                <div class="acordeon">
                    <div class="item">
                        <div class="header"><button className="title-btn-support" onClick={this.expandOptions}>¿Problemas con tu compra?</button></div>
                        <div class="content content-text-support content-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem recusandae, commodi sint at quia nulla placeat. Modi nostrum culpa eos dolorem dignissimos. Cum veritatis nulla modi nam blanditiis quasi?
                        </div>
                    </div>

                    <div class="item">
                        <div class="header"><button className="title-btn-support" onClick={this.expandOptions}>¿No llegó tu pedido?</button></div>
                        <div class="content content-text-support content-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem recusandae, commodi sint at quia nulla placeat. Modi nostrum culpa eos dolorem dignissimos. Cum veritatis nulla modi nam blanditiis quasi?
                        </div>
                    </div>

                    <div class="item">
                        <div class="header"><button className="title-btn-support" onClick={this.expandOptions}>¿Tu servicio no fue concluido?</button></div>
                        <div class="content content-text-support content-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem recusandae, commodi sint at quia nulla placeat. Modi nostrum culpa eos dolorem dignissimos. Cum veritatis nulla modi nam blanditiis quasi?
                        </div>
                    </div>

                    <div class="item">
                        <div class="header"><button className="title-btn-support" onClick={this.expandOptions}>¿Problemas con el domiciliario?</button></div>
                        <div class="content content-text-support content-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem recusandae, commodi sint at quia nulla placeat. Modi nostrum culpa eos dolorem dignissimos. Cum veritatis nulla modi nam blanditiis quasi?
                        </div>
                    </div>
                    <div class="item">
                        <div class="header"><button className="title-btn-support" onClick={this.expandOptions}>Otros Comentarios</button></div>
                        <div class="content content-text-support content-line">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem recusandae, commodi sint at quia nulla placeat. Modi nostrum culpa eos dolorem dignissimos. Cum veritatis nulla modi nam blanditiis quasi?
                        </div>
                    </div>
                    <textarea name="support-comments" id="support-comments" cols="20" rows="8" className='mt-4 col'></textarea>
                    <button className='btn btn-success mx-auto col mt-5'>Enviar</button>
                </div>

            </section>
        )
    }
}