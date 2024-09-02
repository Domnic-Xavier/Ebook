import React from 'react';
import './sample.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Get Started</a></li>
            </ul>
          </nav>
          <h1>Live Easy<br />Stay Safe And Enjoy Your Life</h1>
          <p>For absolute control and convenience that’s both sophisticated and easy to use the first step is clicking here</p>
          <button>Get Started</button>
        </div>
      </header>
      <section className="about">
        <div className="container" align="center">
          <h2>About Smart Home</h2>
          <p>Using a computer or phone to control basic home functions and features with home automation you can determine a schedule for when your device will react.</p>
          <div className="features" >
            <div className="feature">
              <img src="https://i.pinimg.com/564x/7f/ca/4c/7fca4cbf59e33691bb1329561613e116.jpg" alt="Managed centrally" />
              <h3>Managed centrally</h3>
            </div>
            <div className="feature">
              <img src="https://i.pinimg.com/564x/b3/bd/a2/b3bda22db4a5de528207ee6c02d1a51c.jpg" alt="Wireless connection" />
              <h3>Wireless connection</h3>
            </div>
            <div className="feature">
              <img src="https://i.pinimg.com/236x/a2/c5/53/a2c553ea57e865b851d71c910a370519.jpg" alt="Smart application" />
              <h3>Smart application</h3>
            </div>
          </div>
          <button>Request a free home tour</button>
        </div>
      </section>
      <section className="core-features">
        <div className="container">
          <h2>Core Features</h2>
          <div className="features-grid">
            <div className="feature">
              <img src="icon4.png" alt="Adjust Climate Control" />
              <h3>Adjust Climate Control</h3>
            </div>
            <div className="feature">
              <img src="icon5.png" alt="Control Washing machine" />
              <h3>Control Washing machine</h3>
            </div>
            <div className="feature">
              <img src="icon6.png" alt="Adjust Smart Lighting" />
              <h3>Adjust Smart Lighting</h3>
            </div>
            <div className="feature">
              <img src="icon7.png" alt="Lock Up The House" />
              <h3>Lock Up The House</h3>
            </div>
            <div className="feature">
              <img src="icon8.png" alt="Control Smart Iron" />
              <h3>Control Smart Iron</h3>
            </div>
            <div className="feature">
              <img src="icon9.png" alt="Start the coffee Maker" />
              <h3>Start the coffee Maker</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-everything">
        <div className="container">
          <h2>Manage Everything</h2>
          <div className="control-panel">
            <div className="room">
              <h3>Living room</h3>
              <div className="temperature">
                <span>71.2°F</span>
                <span>24.2°F</span>
              </div>
              <div className="control">
                <label>Connection</label>
                <input type="checkbox" defaultChecked />
                <label>Speed</label>
                <input type="range" min="1" max="10" defaultValue="5" />
              </div>
            </div>
            <div className="room">
              <h3>Bedroom</h3>
              <div className="temperature">
                <span>71.2°F</span>
                <span>24.2°F</span>
              </div>
              <div className="control">
                <label>Connection</label>
                <input type="checkbox" defaultChecked />
                <label>Speed</label>
                <input type="range" min="1" max="10" defaultValue="3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quote">
        <div className="container">
          <h2>Calculate Now Your Quote!</h2>
          <p>Answer these questions in less than 5 minutes</p>
          <form>
            <div className="step">
              <h3>Step 01</h3>
              <label>Where do you need to install it?</label>
              <select>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
                <option>Shop</option>
                <option>Warehouse</option>
              </select>
            </div>
            <button>Next Step</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="container">
          <form>
            <label>Your email here</label>
            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </form>
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Connect</a></li>
              <li><a href="#">Join</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </nav>
          <p>© Designed by tipoadsd@grapix.com all right reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
