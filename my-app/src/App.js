import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import NotFoundPage from "./pages/NotFoundPage";
import Genres from "./pages/Genres";
import Resource from "./pages/Resource";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      
      <div className="menu-container">
        <div className="logo">EBook</div>
        <div className="menu-items">
          <NavBar></NavBar>
          </div>
         <div className="find" align="center">
          <h2 >Find your books</h2><br/>
          <p>The reading of all good books is like conversations <br/>with the finest (people) of the past centuries</p>
         </div>
         <div class="search-bar" align="center">
  <input type="text" placeholder="Search..." class="search-input"/>
  <button class="search-button"><i class="fas fa-search"></i></button>
</div>
       </div>
       
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/home/:bookId" element={<BookPage />}></Route>
              <Route path="/genres" element={<Genres />}></Route>
              <Route path="/resource" element={<Resource />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/reg" element={<Reg />}></Route>
              {/* <Route path="/articles/:articleId" element={<ArticlePage />}></Route> */}
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
