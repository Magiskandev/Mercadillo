import React from 'react'
import SearchFilter from '../base/SearchFilter'
import Category from '../base/Category'
import SubCategory from '../base/SubCategory'
import Qualification from '../base/Qualification'

function FilterTabOne() {
    return (
        <section>
            <SearchFilter />
            <div className="d-flex selects-filter-search justify-content-between mt-5">
                <SubCategory />
                <Qualification />
            </div>
        </section>
    )
}

export default FilterTabOne
