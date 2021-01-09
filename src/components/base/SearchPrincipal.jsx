import React from 'react'

function SearchPrincipal(props) {
    return (
        <section>
            <div className="d-flex search-products-nav justify-content-center align-items-center px-3" style={{ width: props.WidthSearch }}>
                <input className="position-relative input-search-products-nav" type="text" placeholder="¿Que producto buscas?" />
                <i class="fas fa-search icon-search-principal-nav position-relative"></i>
            </div>
            <div id="sugerencias">
            </div>
        </section>
        
    )
}

export default SearchPrincipal
