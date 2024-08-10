import { useEffect } from 'react';
import './Footer.scss';

const Footer = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Graphic & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
           
          </div>
          <div className="item">
            <h1>About</h1>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnership</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            
          </div>
          <div className="item">
            <h1>Support</h1>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling </span>
            <span>Buying </span>
          </div>
          <div className="item">
            <h1>Community</h1>
            <span>Events</span>
            <span>Blog</span>
            <span>Forum</span>
            <span>Community Standards</span>
            <span>Podcast</span>
          
          </div>
          <div className="item">
            <h1>More From Freelance Fiesta</h1>
            <span>Business</span>
            <span>FreelanceFiesta Pro</span>
            <span>FreelanceFiesta Studios</span>
            <span>Logo Maker</span>
            <span>Guild</span>
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>freeLance Fiesta</h2>
            <span>© FreeLance Fiesta International Ltd. {new Date().getFullYear()}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="./img/twitter.png" alt="" />
              <img src="./img/facebook.png" alt="" />
              <img src="./img/linkedin.png" alt="" />
              <img src="./img/pinterest.png" alt="" />
              <img src="./img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="./img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <div className="link">
              <img src="./img/accessibility.png" alt="" />
              <span>Inr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer