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
import AddBook from "./pages/AddBook";
import ViewAll from "./pages/ViewAll";
import Sample from "./pages/sample";

function App() {
  return (
    <>
    <head><title>Ebook</title></head>
      <BrowserRouter>
          <div className="menu-container" id="img-back">
            <NavBar></NavBar>
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
            <Route path="/viewall" element={<ViewAll />}></Route>
            <Route path="/book" element={<AddBook />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/sample" element={<Sample />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
