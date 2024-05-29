import React, { useState } from 'react'
import "./style.css"
const Testimonials = () => {
    const [currentIndex,setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "This is the best product I've ever had",
            author: 'test1'
        },
        {
            quote: "Absolutely amazing! Highly recommended.",
            author: 'test2'
        },
        {
            quote: "Top-notch quality and excellent service.",
            author: 'test3'
        },
        {
            quote: "Impressive features and great value for money.",
            author: 'test4'
        },
        {
            quote: "Changed my life! Thank you!",
            author: 'test5'
        }
    ]
    const handlePrevClick = ()=>{
        setCurrentIndex((currentIndex+testimonials.length-1)%testimonials.length)
    }
    const handleNextClick = ()=>{
        setCurrentIndex((currentIndex+1)%testimonials.length)
    }
  return (
    <div className = "testimonials">
        <div className='testimonials-quote'>
            {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
            - {testimonials[currentIndex].author}
        </div>
        <testimonials className="testimonials-nav">
            <button onClick = {handlePrevClick}>Prev</button>
            <button onClick = {handleNextClick}>Next</button>
        </testimonials>
    </div>
  )
}

export default Testimonials