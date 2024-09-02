// import books from "./books-content";
// import genres from "./genres-content";
import axios from "axios"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function GenrePage() {
 
  const {genreId } = useParams();
  // const genre = books.find(book => book.genre === genreId);

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/genres/${genreId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  

  if (data) {
    return (
      <>
      {data.map((book)=>(
        <section class="about-us">
        <div class="about">
          <img src={book.image} class="pic" />
          <div class="text">
            <h2>{book.name} ({book.genre})</h2>
            <h5>{book.author}</h5>
            <p>{book.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}</p>
            <div class="data">
              <a href="#" class="hire">Read</a>
            </div>
          </div>
        </div>   
      </section>

      ))}
      </>
    ); } else {
      <NotFoundPage></NotFoundPage>
    }
}
export default GenrePage;
