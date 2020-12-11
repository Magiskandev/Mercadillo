import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav className="container-fluid d-flex justify-content-center mt-4">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <bitton onClick={() => paginate(number)} className='page-link btn-paginate-products'>
                            {number}
                        </bitton>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
