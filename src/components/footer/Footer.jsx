import React, { useState, useEffect } from 'react'
// import footer from "../images/footer.png"
import "./Footer.css"
import app_store from "/images/logos/app_store.png"
import google_play from "/images/logos/google_play.png"
import logo from "/images/logos/fsblack-logo.png"
import writemail from "/images/write-email.png"
import { FaAngleDown } from "react-icons/fa"

// import "../../../public/"
import {BsInstagram,BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => { 

  const [isOpensupport, setIsOpensupport] = useState(true);
  const [isOpenlinks, setIsOpenlinks] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
 
  const toggleAccordionsupport = () => {
    setIsOpensupport(!isOpensupport);
  }
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }
  const toggleAccordionlinks = () => {
    setIsOpenlinks(!isOpenlinks);
  }


  ////tab logic

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsOpensupport(false)
        
        setIsOpenlinks(false)

      } else {
        setIsOpensupport(true)
        setIsOpen(true)
        setIsOpenlinks(true)
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Listen for window resize events

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getDivWidth = () => {
    if (window.innerWidth > 992) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <footer className='footer'>

      <div className='footer-1' >
        <img src={logo} alt="fs-logo" className='f1-fslogo' />
        <p className='f1-para' style={{ width: "85%" }}>"shop authentic Indian ethnic products online at Fashion Jalsa - Your one stop destination for Traditional Fashion."</p>

        <div className='flex items-center my-3 '>
            <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <BsInstagram color="black" size={15}/>
               
            </div>
            <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <FaFacebookF color="black" size={15}/>
               
            </div>
            <div className=' mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <BsTwitter color="black" size={15}/>
               
            </div>
            </div>


      </div>
      <div className="footer-2">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="footer-heading" style={{  marginBottom:  `${window.innerWidth > 768 ? "0" : ".8rem"}` }}>
            Supports
          </h2>
          {
            getDivWidth() && <button className={`accordion-btn ${isOpensupport ? 'open' : ''}`} onClick={toggleAccordionsupport}>
              <FaAngleDown className={`arrow-icon ${isOpensupport ? 'rotate' : ''}`} />
            </button>
          }

        </div>
        {isOpensupport && (
          <ul className="footer-list">
            <li>Contact Us</li>
            <li>Track Orders</li>
            <li>How To Shop</li>
            <li>Stitching</li>
            <li>FAQ</li>
          </ul>
        )}
      </div>
      <div className="footer-2">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="footer-heading" style={{  marginBottom:  `${window.innerWidth > 768 ? "0" : ".8rem"}` }}>
            Links
          </h2>
          {
            getDivWidth() && <button className={`accordion-btn ${isOpenlinks ? 'open' : ''}`} onClick={toggleAccordionlinks}>
              <FaAngleDown className={`arrow-icon ${isOpenlinks ? 'rotate' : ''}`} />
            </button>
          }

        </div>
        {isOpenlinks && (
          <ul className="footer-list">
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Shipping and Return</li>
            <li>Privacy Policy</li>
            <li>Seller Section</li>
          </ul>
        )}
      </div>
      {/* <div className='footer-4'> 
        
       
      </div> */}

      <div className="footer-4">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="footer-heading" style={{  marginBottom:  `${window.innerWidth > 768 ? "0" : ".8rem"}` }}>New Arrivals | Discounts | Offers</h2>
          {
            getDivWidth() && <button className={`accordion-btn ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
              <FaAngleDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
            </button>
          }


        </div>
        {isOpen && (
          <>
            <p className='e-info' style={{ width: "350px", marginBottom: ".5rem", fontSize: "1.2rem" }}>Subscribe to get the latest on sales, new releases and more...</p>

            <div className='email-section'>
              <img className='e-email' src={writemail} alt="mail-logo" />
              <input className='e-input' type="text" placeholder="Type Your Email id" />
              <button className='e-button'>Submit</button>
            </div>
            {
              !getDivWidth() && <div className='flex'>
                <img className='footer-pstore' src={google_play} alt="play_store" />
                <img className='footer-pstore' src={app_store} alt="app_store" />
              </div>
            }

          </>
        )}
      </div>

      {
        getDivWidth() &&  <div className='footer-5' style={{textAlign:"center"}}>
        <h3 style={{marginBottom:"0.4rem",marginTop:"4rem"}}>Download Now</h3>
        <div className='flex'>
        <div>
        <img className='footer-pstore' src={app_store} alt="app_store" />

        </div>
        <div>
        <img className='footer-pstore' src={google_play} alt="play_store" />

        </div>
        </div>
        
      </div>
      }
      


    </footer>
  )
}

export default Footer

