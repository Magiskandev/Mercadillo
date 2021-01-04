import React from 'react'
import SeparatorTestimonials from '../../images/svg/separator-testimonials.svg'

function Testimonials(props) {
    return (
        <div className="">
            <div className="d-flex flex-column align-items-center">
                <div className="paragraph-testimonials-style">
                    <p>{props.ParagraphOne}</p>
                    <p className="mt-4 mb-2">{props.ParagraphTwo}</p>
                </div>
                <img src={SeparatorTestimonials} alt="" className="mb-3" />
            </div>
            <div className="d-flex align-items-center">
                <img src={props.AvatarTestimonial} alt="" className="ml-2 mr-4" />
                <div>
                    <p className="name-testimonial-style">{props.NameTestimonial}</p>
                    <p className="position-testimonial-style">{props.PositionTestimonial}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
