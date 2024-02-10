import React from 'react'
import "./product.css"
import component from "../../assets/images/component.png"

const Product = () => {
  return (
    <section className='section'>
        <div className='flex center '>
            <img src={component} alt="" className='product-image' />
        </div>
    </section>
  )
}

export default Product