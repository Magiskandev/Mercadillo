import React from 'react';

const Product = (props)=>{
    const {product, place, category, price} = props;
    return(
        <article>
            <h3>{product}</h3>
            <h4>{place}</h4>
            <h4>{price}</h4>
            <h4>{category}</h4>
        </article>
    )
}
export default Product;