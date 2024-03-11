import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";
// import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import GenrePage from "./pages/GenrePage";
import NotFoundPage from "./pages/NotFoundPage";
import Genres from "./pages/Genres";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Footer from "./pages/footer";
import Reg from "./pages/Reg";
import NavBar from "./NavBar";

function App() {

  const [activeImage, setActiveImage] = useState(3); // Assuming img3 is initially active

  const handleClick = (id) => {
    setActiveImage(id);
  };
  return (
    <>
      <BrowserRouter>
        <div className="fix">
          <div className="menu-container">
            <NavBar></NavBar>
            {/* <hr></hr> */}
            <ul>
              <li><div className="find" align="center">
                <h1 >FIND YOUR BOOKS</h1><br />
                <p>The reading of all good books is like conversations <br />with the finest (people) of the past centuries</p>
              </div></li>
              {/* <li>
                <div className="con">
                  <div className={`im ${activeImage === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                    <img src={'/bookimg/book-01.jpg'}></img>
                    <h3>Ford Mustang</h3>
                  </div>
                  <div className={`im ${activeImage === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  <img src={'/bookimg/book-01.jpg'}></img>
                    <h3>Ford Mustang</h3>
                  </div>
                  <div id="img3" className={`im ${activeImage === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  <img src={'/bookimg/book-01.jpg'}></img>
                    <h3>Mustang Boss</h3>
                  </div>
                  <div id="img4" className={`im ${activeImage === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                  <img src={'/bookimg/book-01.jpg'}></img>
                    <h3>Mustang Boss</h3>
                  </div>
                  <div id="img5" className={`im ${activeImage === 5 ? 'active' : ''}`} onClick={() => handleClick(5)}>
                  <img src={'/bookimg/book-01.jpg'}></img>
                    <h3>Bullit Mustang</h3>
                  </div>
                </div>
              </li> */}
              </ul>
            {/* <div class="search-bar" align="center">
              <input type="text" placeholder="Search..." class="search-input" />
              <button class="search-button"><i class="fas fa-search"></i></button>
            </div> */}
          </div>
        </div>

        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home/:bookId" element={<BookPage />}></Route>
            <Route path="/genres" element={<Genres />}></Route>
            <Route path="/genres/:genreId" element={<GenrePage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reg" element={<Reg />}></Route>
            {/* <Route path="/articles/:articleId" element={<ArticlePage />}></Route> */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
