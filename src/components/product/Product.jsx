import React from 'react'
import "./product.css"
import champion from "../../assets/images/champion.png"
import water5 from "../../assets/icons/water5.svg"

const Product = () => {
  return (
    <section className='product-champ'>

     
        <div className='champion-product flex center ' data-aos="zoom-in-up">
            <img src={champion} alt="" className='product-image' />
        </div>
    </section>
  )
}

export default Product