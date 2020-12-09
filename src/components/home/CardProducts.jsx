import React, {useState, useEffect} from 'react'
import CardProduct from '../CardProduct'
import axios from 'axios'

const CardProducts = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [productsPerPage, setProductsPerPage] = useState(9);


useEffect(() => {
    const fetchProducts = async () => {
setLoading(true);
const res = await axios.get('https://my-json-server.typicode.com/Tech-Code1/Products/products');
setProducts(res.data);
setLoading(false);
    }

    fetchProducts();
}, [])

/* Get current products */
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirtsProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirtsProduct, indexOfLastProduct);



    return (
        <>
        <section
        style={{width: '1500px'}}
        className="container-fluid d-flex
        flex-wrap h-auto">

        <CardProduct
        products={currentProducts} loading={loading}
        />
            </section>
    </>
    )}

export default CardProducts
