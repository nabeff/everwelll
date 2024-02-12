import React from 'react'
import "./product.css"
import champion from "../../assets/images/champion.png"

const Product = () => {
  return (
    <section className='product-champ'>
        <div className='flex center '>
            <img src={champion} alt="" className='product-image' />
        </div>
    </section>
  )
}

export default Product