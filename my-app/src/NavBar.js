// import { Link } from "react-router-dom";
// import logo from "./images/logoicon.jpg";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";
// import book from "./pages/genre-img/img-05.png";

const NavBar = () => {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <>
      <nav className="navi">
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <Link to="/" className="logo">Book</Link>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/genres">Genres</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="/login">Sing in</Link></li>
          <li> <div className="btn">
                { user ?
                    <button onClick={() => signOut(getAuth())}>Logout</button>
                    :
                    <button onClick={() => navigate('/login')}>Login</button>
                }
        </div>
        </li>

        </ul>
        
      </nav>
      {/* <div className="find">
        <h1 >Welcome to <br/>
          The Book World!</h1><br />
        <p>Every book is a journey, a passage to <br />new horizons where imagination knows no bounds.</p>
      </div> */}


    <div className="featured-books-section">
      <div className="text-section">
        <h2>The Bookworm Edition</h2>
        <h1>Featured Books of <br/> the July</h1>
        <Link to="/viewall"><button className="see-more-button">See More</button></Link>
      </div>
      <div className="books-display">
        <div className="books-scroll">
        <img src="https://m.media-amazon.com/images/I/5165He67NEL._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 1" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41JOjOy4gFL._AC_UY266_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 2" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41JaY1A9OPL._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 3" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41zR0ZLjV1L._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 4" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/517AL6uVthL._SY300_.jpg" alt="Book 5" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/5165He67NEL._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 1" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41JOjOy4gFL._AC_UY266_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 2" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41JaY1A9OPL._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 3" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/41zR0ZLjV1L._AC_UY248_FMwebp_.jpg?aicid=books-design-system-web" alt="Book 4" className="book-image" />
        <img src="https://m.media-amazon.com/images/I/517AL6uVthL._SY300_.jpg" alt="Book 5" className="book-image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;