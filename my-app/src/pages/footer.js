import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className='fot'>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Ebook</h1><br/>

          <h2 className="nav__title">Contact</h2>
          <address>
            Bangalore In. The World 22193-10212<br />
            <a className="footer__btn" href="mailto:xavier@lyrostech.com">Email Us</a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Info</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online Book</a>
              </li>

              <li>
                <a href="#">Author</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Genres</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Fantasy</a>
              </li>

              <li>
                <a href="#">Romance</a>
              </li>

              <li>
                <a href="#">Thriller</a>
              </li>

              <li>
                <a href="#">Fiction</a>
              </li>

              <li>
                <a href="#">Horror</a>
              </li>

              <li>
                <a href="#">Children</a>
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
