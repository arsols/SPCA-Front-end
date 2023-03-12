import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
    <div style={{marginRight:'28px',marginBottom:'50px',marginTop:'50px'}} className="social-icons">
    <a className="social-icon">
      <i  className="fab fa-discord"/>
      <div className="tooltip">Codepen</div>
    </a>
    <a className="social-icon ">
    <i class="fab fa-facebook"></i>
      <div className="tooltip">Github</div>
    </a>
    <a className="social-icon">
    <i class="fab fa-youtube"></i>
      <div className="tooltip">Twitter</div>
    </a>
    <a className="social-icon ">
    <i class="fab fa-instagram"></i>
      <div className="tooltip">Dribbble</div>
    </a>
    <a className="social-icon ">
    <i class="fab fa-twitter"></i>
      <div className="tooltip">Instagram</div>
    </a>
    <a className="social-icon">
    <i class="fab fa-tiktok"></i> 
      <div className="tooltip">LinkedIn</div>
    </a>
    <a className="social-icon">
     <i className="fab fa-linkedin" />
      <div className="tooltip">Facebook</div>
    </a>
  </div>
  <div style={{marginBottom:'50px',marginTop:'50px'}}>
    <a><span style={{color:'white',marginRight:'10px'}}>Anout us</span></a>
    <a><span  style={{color:'white',marginLeft:'10px'}}>White paper</span></a>
  </div>
  </>
  )
}

export default Footer