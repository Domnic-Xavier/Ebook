import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
      <nav>
        <ul>
            <li> <Link to = "/">Home</Link></li>
            <li> <Link to = "/genres">Genres</Link></li>
            <li> <Link to = "/resource">Resource</Link></li>
            <li> <Link to = "/login">Sing in</Link></li>
            <li> <Link to = "/reg">Sign up</Link></li>
        </ul>
      </nav>
    );
}

export default NavBar;