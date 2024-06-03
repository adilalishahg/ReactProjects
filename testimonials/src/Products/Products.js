import React from 'react'
import "./Products.css"
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
const Products = () => {
  return (
    <section className='card-container'>
        <section className='card'>
            <img src="https://m.media-amazon.com/images/I/71p7kTbXHHL._AC_UY327_FMwebp_QL65_.jpg" alt="shoes" className='card-img'/>
            <div className='card-details'>
                <div className='card-title'>

                    <h3>Shoes</h3>
                    <section className="card-reviews">
                        <AiFillStar className='ratings-start'/>
                        <span className="total-reviews">4</span>
                    </section>
                    <section className='card-price'>
                        <div className="price">
                            <del>$300</del>300
                        </div>
                        <div className="bag-icon" >
                            <BsFillBagHeartFill/>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Products