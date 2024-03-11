import books from "./books-content";
import genres from "./genres-content";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function GenrePage() {
  // const { bookId,genreId } = useParams();
  // const book = books.find(book => book.name === bookId );
  const {genreId } = useParams();
  const genre = genres.find(book => book.genre === genreId);
  console.log(genre);
  if (genre) {
    return (
      <>
      {books.genre.map((book)=>(
        <div className="card1">
                <div className="img-bx1">
                    {/* <img id={book.image} alt="book image" width="60%" height="45%"/> */}
                    {/* <div class="content1">
                        <h2>{book.name}<br /><span>{book.author}</span></h2>
                    </div> */}
                    
                </div>
              
                <div class="content1">
                    <div class="detail">
                        <h2>
                          {/* {book.name}<br /> */}
                        {/* <span>{book.author}</span> */}
                        <span>{book.genre}</span>
                        </h2>
                    </div>
                </div>
                {/* <div>
                {book.content.map((paragraph,i) => (
                  <p key = {i}>{paragraph}</p>  
                ))}
                </div> */}
        </div> 
        ))} 
      </>
    );
  } else {
    return <NotFoundPage></NotFoundPage>;
  }
}

export default GenrePage;
