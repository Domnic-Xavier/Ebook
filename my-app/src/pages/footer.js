import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className='fot'>
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">Ebook</h1>
        
    <h2>Contact</h2>
    <br/>
    <address>
      Bangalore In. The World 22193-10212<br/>
          
      <a className="footer__btn" href="mailto:xavier@lyrostech.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Genre</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Technology</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
            <div class="f_social_icon">
              <a href="#" class="fab fa-facebook"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-linkedin"></a>
              <a href="#" class="fab fa-pinterest"></a>
            </div>
    </li>
  </ul>
</footer>
<div className="foot"><span>&copy; 2024 Something. All rights reserved.</span></div>
    </div>
  );
}


export default Footer;
