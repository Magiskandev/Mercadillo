import React, { useState, useEffect } from 'react'
import CardProduct from './CardProduct'
import Pagination from './Pagination'
import axios from 'axios'
import productsTwo from './data/accessProduct'

const CardProducts = ({ productsTwo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    /* Product two */
    const [productsTwo] = useState([]);
    const [currentPageTwo, setCurrentPageTwo] = useState(1);
    const [productsPerPageTwo] = useState(5);

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

    /* Get current products Two */
    const indexOfLastProductTwo = currentPageTwo * productsPerPageTwo;
    const indexOfFirtsProductTwo = indexOfLastProductTwo - productsPerPageTwo;
    const currentProductsTwo = productsTwo.slice(indexOfFirtsProductTwo, indexOfLastProductTwo);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    /*   const paginateTwo = (pageNumber) => setCurrentPageTwo(pageNumber); */

    return (
        <>
            <section
                style={{ width: '1500px' }}
                className="container-fluid d-flex
        flex-wrap h-auto">

                <CardProduct
                    products={currentProducts} loading={loading}
                />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate} />
            </section>
            <section
                style={{ width: '1500px' }}
                className="container-fluid d-flex
        flex-wrap h-auto">

                <CardProduct
                    productsTwo={productsTwo}
                />
                <Pagination
                    productsPerPage={productsPerPageTwo}
                    totalProducts={products.length}
                    paginate={paginate} />
            </section>
        </>
    )
}

export default CardProducts
