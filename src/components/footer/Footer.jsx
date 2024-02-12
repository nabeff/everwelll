import React, { useState, useEffect } from 'react';
import visa from "../../assets/icons/visa.png"
import apple from "../../assets/icons/apple.png"
import banque from "../../assets/icons/banque.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import google from "../../assets/icons/google.png"
import instagram from "../../assets/icons/instagram.png"
import paypal from "../../assets/icons/paypal.png"

import "./footer.css"

const Footer = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const isMobile = viewportWidth < 850;
    
  return (
    <section>

        <div className='footer'>

        <div className='footer-container flex-col'>

        <div className='footer-content flex'>

            <div className='footer-info flex-col'>
                <div className='flex-col'>
                <h1 className='title white'>EverWell</h1>
                <p className='white paragraph'>Elevate your inner wellness.</p>
                </div>

                <div className='flex icon'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>

            <div className='flex footer-link '>

                <div className='list-flex flex-col'>

                    {!isMobile && <h3 className='drop-title white '>Company</h3>}

                    <div className={`footer-list white ${isMobile ? 'dropdown' : ''}`}>

                {isMobile ? (
                <select>
                    <option value='' disabled selected hidden>Company</option>
                    <option value='Products'>About</option>
                    <option value='Ordering & Shipping'>Shop</option>
                    <option value='Wellness Quiz'>Blog</option>
                    <option value='Returns & Refunds'>Cart</option>
                    <option value='Returns & Refunds'>Affiliate Program</option>
                </select>
                    ) : (
            <>
                <li>About</li>
                <li>Shop </li>
                <li>Blog</li>
                <li>Cart</li>
                <li>Affiliate Program</li>
            </>
)}
</div>
                </div>

                <div className='list-flex flex-col'>

                    {!isMobile && <h3 className='drop-title white'>Help</h3>}

                    <div className={`footer-list white ${isMobile ? 'dropdown' : ''}`}>
                {/* Dropdown items */}
                {isMobile ? (
                  <select>
                    <option value='' disabled selected hidden>Help</option>
                    <option value='Products'>Help Center</option>
                    <option value='Ordering & Shipping'>Contact Us</option>
                    <option value='Wellness Quiz'>Community</option>
                    <option value='Returns & Refunds'>Terms & Conditions</option>
                    <option value='Privacy Policy'>Privacy Policy</option>
                  </select>
                ) : (
                  <>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Community</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </>
                )}
              </div>
                </div>

                <div className='list-flex flex-col'>

                    {!isMobile && <h3 className='drop-title white'>FAQ</h3>}

                    <div className={`footer-list white ${isMobile ? 'dropdown' : ''}`}>
                {/* Dropdown items */}
                {isMobile ? (
                  <select>
                    <option value='' disabled selected hidden>FAQ</option>
                    <option value='Products'>Products</option>
                    <option value='Ordering & Shipping'>Ordering & Shipping</option>
                    <option value='Wellness Quiz'>Wellness Quiz</option>
                    <option value='Returns & Refunds'>Returns & Refunds</option>
                  </select>
                ) : (
                  <>
                    <li>Products</li>
                    <li>Ordering & Shipping</li>
                    <li>Wellness Quiz</li>
                    <li>Returns & Refunds</li>
                  </>
                )}
              </div>
                </div>


            </div>
            
        </div>

        <div className='footer-payment flex'>

            <div>
                <p className='white'>Copyright 2023 | EverWell | All Rights Reserved </p>
            </div>

           
            <div className='flex '>
                    <img src={visa} alt="" />
                    <img src={banque} alt="" />
                    <img src={paypal} alt="" />
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                   
                </div>
            
        </div>

        </div>

        </div>
    </section>
  )
}

export default Footer
