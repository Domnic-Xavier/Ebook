import BookList from "../components/BookList";
import books from "./books-content";
import "./home.css";
import Genres from './Genres';

function HomePage() {
  return (
    <>
    <div className="hom">
      <h2>Free Books </h2>
    </div>
    <div className="bk">
      <BookList books = {books}></BookList>
    </div><br/>
    <br/>
    </>
  );
}

export default HomePage;
