import books from "./books-content";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function BookPage() {
  const { bookId } = useParams();
  const book = books.find(book => book.name === bookId);
 
  if (book) {
    return (
      <>
        <div className="card1">
                <div className="img-bx1">
                    <img id={book.image} alt="book image"/>
                    <h2>{book.name}<br /><span>{book.author}</span></h2>
                </div>
                <div class="content1">
                    <div class="detail">
                        <h2>{book.name}<br /><span>{book.author}</span></h2>
                    </div>
                </div>
                <div>
                {book.content.map((paragraph,i) => (
                  <p key = {i}>{paragraph}</p>  
                ))}
                </div>
        </div>
        
      </>
    );
  } else {
    return <NotFoundPage></NotFoundPage>;
  }
}

export default BookPage;
