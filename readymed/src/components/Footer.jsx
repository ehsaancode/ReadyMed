import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-content-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white'>Signup for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text btn p-2" id="basic-addon2">
                    Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact us</h4>
            <div>
              <address className='text-white fs-6'>
                Ward no. 04, <br /> dankuni, Hooghly <br /> pin 712310 <br />WB, India 
              </address>
              <a href="tel: +91 7278969146" className='mt-3 d-block mb-3 text-white'>+91 7278969146</a>
              <a href="mailto: mail.ehsaan@gmail.com" className='mt-2 d-block mb-3 text-white mb-0'>mail.ehsaan@gmail.com</a>

              <div className="social-icons d-flex gap-30 align-items-center mt-4">
                <a href="#">
                <FaFacebook  className='text-white fs-5'/>
                </a>
                <a href="#">
                <FaInstagram  className='text-white fs-5'/>
                </a>
                <a href="#">
                  <FaYoutube className='text-white fs-5'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div>
            <div className='footer-links flex d-flex flex-column'>
              <Link className="text-white mb-1 py-2">Privacy Policy</Link>
              <Link className="text-white mb-1 py-2">Refund Policy</Link>
              <Link className="text-white mb-1 py-2">Shipping Policy</Link>
              <Link className="text-white mb-1 py-2">Terms & Conditions</Link>

            </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links flex d-flex flex-column'>
              <Link className="text-white mb-1 py-2">About Us</Link>
              <Link className="text-white mb-1 py-2">FAQ</Link>
              <Link className="text-white mb-1 py-2">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick links</h4>
            <div className='footer-links flex d-flex flex-column'>
              <Link className="text-white mb-1 py-2">Vitamins and Minerals</Link>
              <Link className="text-white mb-1 py-2">Herbal Supplements</Link>
              <Link className="text-white mb-1 py-2">Nutrition and Dietary</Link>
              <Link className="text-white mb-1 py-2">Men's Health</Link>
              <Link className="text-white mb-1 py-2">Women's Health</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className='row'>
          <div className="col-12 mb-0 text-white">
            <p className="text-center"> 
              &copy; {new Date().getFullYear()} ReadyMed
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

//1.29.09
