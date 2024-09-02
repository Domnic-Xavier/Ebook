import books from "./books-content";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AddCommentForm from "../components/AddComment";
import CommentList from "../components/CommentList";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import "./book.css"


function BookPage() {
  const [bookInfo, setBookInfo] = useState({ likes: 0, comments: [] });
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadBookInfo = async () => {

      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};

      const response = await axios.get(`/api/books/${bookId}`, { headers });
      const newBookInfo = response.data;
      setBookInfo(newBookInfo);
    };
    loadBookInfo();
    fetchData();
  }, [bookId])

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/books/${bookId}`);
      setBook(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const book = books.find(book => book.name === bookId);

  const toggleLike = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.put(`/api/books/${bookId}/like`, null, { headers });
    const updatedBook = response.data;
    setBookInfo(updatedBook);
  };

  if (book) {
    return (
      <>
        <section class="about-us">
          <div class="about">
            <img src={book.image} class="pic" />
            <div class="text">
              <h2>{book.name}</h2>
              <h5>{book.author}</h5>
              <h3 className="strike">Free <s> $100</s></h3><br></br>
              <p>{book.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}</p>
              <div class="data">
                <a href="#" className="hire">Read</a>
                <div className="but">
                  {user ? (
                    <a class="hire" onClick={toggleLike}>
                      {bookInfo.liked ? "Dislike" : "Like"}
                    </a>
                  ) : (
                    <Link to="/login">
                      <a class="hire">Log in to Like</a> 
                    </Link>
                  )} <br/>
                  &nbsp;{bookInfo.likes} likes
                  {/* {book.name} has  */}
                  
                </div>
              </div>
            </div>
          </div>

        </section>
        <img src="https://capricathemes.com/opencart/OPC01/OPC010003/OPC2/image/cache/catalog/Main-Banner-01-1920x737.jpg" width="100%" height="55%" /><br/><br/>
        <div className="com">


          {user
            ? <AddCommentForm
              bookName={bookId}
              onBookUpdated={updateBook => setBookInfo(updateBook)} />

            : <Link to='/login'><button>Log in to Comment</button></Link>
          }

          <br></br>
          <CommentList comments={bookInfo.comments}></CommentList>
        </div>

      </>
    );
  } else {

    return <NotFoundPage></NotFoundPage>;
  }
}

export default BookPage;
