import React from 'react'

function SearchFilter() {
    return (
        <div className="d-flex search-products-filter justify-content-center align-items-center px-3">
            <input className="position-relative input-search-products-filter" type="text" placeholder="¿Que producto buscas?" />

            <i class="fas fa-search icon-search-principal-nav position-relative"></i>
        </div>
    )
}

export default SearchFilter
