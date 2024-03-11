import { Link } from "react-router-dom";
// import book from "./pages/genre-img/img-05.png";

const NavBar = () => {
  return (
    <>
      <nav className="navi">
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label class="logo" ><img src={""}></img>Ebook</label>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/genres">Genres</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="/login">Sing in</Link></li>
          <li> <Link to="/reg" className="btn">Sign up</Link></li>
          
        </ul>
      </nav>
      <section></section>
    </>
  );
}

export default NavBar;