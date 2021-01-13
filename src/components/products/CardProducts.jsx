import React, { useState, useEffect } from 'react'
import CardProduct from './CardProduct'
import Pagination from './Pagination'
import axios from 'axios'
import productsTwo from './data/accessProduct'

const CardProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    /* Product two */
    const [productsAccess] = useState(productsTwo);
    const [currentPageTwo, setCurrentPageTwo] = useState(1);
    const [productsPerPageTwo] = useState(15);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await axios.get('https://pruebafiltro.tiagobg.repl.co/products');
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
    const currentProductsTwo = productsAccess.slice(indexOfFirtsProductTwo, indexOfLastProductTwo);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const paginateTwo = (pageNumberTwo) => setCurrentPageTwo(pageNumberTwo);

    return (
        <>
            <section
                style={{ width: '1026px' }}
                className="container-fluid d-flex
        flex-wrap h-auto section-cards-global justify-content-between px-3">


                <CardProduct
                    products={currentProducts}
                />

                <Pagination
                    productsPerPage={productsPerPageTwo}
                    totalProducts={productsAccess.length}
                    paginate={paginateTwo} />
            </section>



            {/* <section
                style={{ width: '1026px' }}
                className="container-fluid d-flex
        flex-wrap h-auto">

                <CardProduct
                    products={currentProducts} loading={loading}
                />
            </section>

            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate} /> */}

        </>
    )
}

export default CardProducts
