import React from 'react'

function SubcategoryComponent(props) {
    return (
        <section className="d-flex justify-content-center align-items-center master-subcategory-content-info-two">
            <div className="hover-subcategory-info position-absolute"></div>
            <a href="/#" className="text-decoration-none position-absolute subcategory-info-content-tab-two">
                <article className="article-subcategory-content-global">
                    <header className="header-subcatergory-content justify-content-center d-flex
                    align-items-center">
                        <h2 className="title-subcatergory-style">{props.subcategory}</h2>
                    </header>
                    <div className="subcatergory-content d-flex justify-content-center
                    align-items-center">

                        <div>
                            <div >
                                <div className="subcategory-line-style"></div>
                                <div className="subcategory-line-style mt-1"></div>
                            </div>

                            <div className="mt-3">
                                <div className="subcategory-line-style"></div>
                                <div className="subcategory-line-style mt-1"></div>
                            </div>
                        </div>

                        <div className="ml-3">
                            <div className="subcategory-img-style"></div>
                            <div className="subcategory-img-style mt-3"></div>
                        </div>
                    </div>
                </article>
            </a>
        </section>
    )
}

export default SubcategoryComponent
