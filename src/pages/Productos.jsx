import {Component} from 'react';
import CarouselApp from '../components/productos/CarouselApp';
import SearchBar from '../components/productos/SearchBar';

export default class Productos extends Component{
    render(){
        return(
            <section>
                {/* <CarouselApp/> */}
                <SearchBar/>
            </section>
        )
    }
}