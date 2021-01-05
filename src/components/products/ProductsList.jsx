import React from 'react';
//importing the api
//import {data} from '../dataBase';
//importing child component
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductsList (){
    fetch ('https://pruebafiltro.tiagobg.repl.co/products').then(response => response.json()).then(data => console.log(data));
    return(
        <section>
            <div className='col-4'>
            {/* {data.map((data)=>{
                console.log(data)
                return(            
                    <ProductCard key={data.id} {...data}/>
                )
            })} */}
            </div>            
        </section>
    )
}